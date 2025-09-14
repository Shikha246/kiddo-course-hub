import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Clock, User } from 'lucide-react';

const availableCourses = [
  {
    id: '1',
    name: 'Creative Coding for Kids',
    time: '10:00 AM - 12:00 PM',
    day: 'Saturday',
    instructor: 'Ms. Sarah',
    level: 'Beginner',
    description: 'Learn programming through fun games and animations!'
  },
  {
    id: '2',
    name: 'Digital Art & Design',
    time: '2:00 PM - 4:00 PM',
    day: 'Saturday',
    instructor: 'Mr. Alex',
    level: 'Beginner',
    description: 'Create amazing digital artwork and learn design principles!'
  },
  {
    id: '3',
    name: 'Robotics Workshop',
    time: '10:00 AM - 12:00 PM',
    day: 'Sunday',
    instructor: 'Dr. Maya',
    level: 'Intermediate',
    description: 'Build and program your own robots!'
  },
  {
    id: '4',
    name: 'Web Development Basics',
    time: '2:00 PM - 4:00 PM',
    day: 'Sunday',
    instructor: 'Mr. David',
    level: 'Beginner',
    description: 'Create your first website with HTML, CSS, and JavaScript!'
  },
];

const EnrollmentForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    selectedCourses: [] as string[],
  });

  const handleCourseToggle = (courseId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedCourses: prev.selectedCourses.includes(courseId)
        ? prev.selectedCourses.filter(id => id !== courseId)
        : [...prev.selectedCourses, courseId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.age || formData.selectedCourses.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and select at least one course.",
        variant: "destructive",
      });
      return;
    }

    const enrolledCourses = availableCourses.filter(course => 
      formData.selectedCourses.includes(course.id)
    );

    const studentData = {
      name: formData.name,
      age: parseInt(formData.age),
      courses: enrolledCourses,
    };

    localStorage.setItem('studentEnrollment', JSON.stringify(studentData));
    
    toast({
      title: "Enrollment Successful! 🎉",
      description: `Welcome ${formData.name}! You've enrolled in ${enrolledCourses.length} course(s).`,
    });

    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <Card className="w-full max-w-2xl bg-gradient-card shadow-soft border-0">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl font-bold text-foreground flex items-center justify-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          Course Enrollment
        </CardTitle>
        <p className="text-muted-foreground mt-2">
          Join our exciting courses and start your learning journey!
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Information */}
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Student Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your name"
                  className="bg-white border-border focus:border-primary focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="age" className="text-foreground font-medium">
                  Age
                </Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, age: value }))}>
                  <SelectTrigger className="bg-white border-border">
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 6).map(age => (
                      <SelectItem key={age} value={age.toString()}>
                        {age} years old
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Course Selection */}
          <div className="space-y-4">
            <Label className="text-foreground font-medium text-lg">
              Choose Your Courses
            </Label>
            <div className="grid gap-4">
              {availableCourses.map((course) => (
                <div
                  key={course.id}
                  className="p-4 bg-white rounded-lg border border-border hover:shadow-soft transition-smooth"
                >
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id={course.id}
                      checked={formData.selectedCourses.includes(course.id)}
                      onCheckedChange={() => handleCourseToggle(course.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label
                        htmlFor={course.id}
                        className="block cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">
                            {course.name}
                          </h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {course.level}
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {course.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <span>📅</span>
                            {course.day}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {course.instructor}
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:shadow-glow transition-smooth text-lg py-6"
          >
            Enroll Now! 🚀
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EnrollmentForm;