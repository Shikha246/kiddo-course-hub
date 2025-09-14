import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, User, BookOpen, ArrowLeft } from 'lucide-react';

interface EnrolledCourse {
  id: string;
  name: string;
  time: string;
  day: string;
  instructor: string;
  level: string;
}

interface StudentData {
  name: string;
  age: number;
  courses: EnrolledCourse[];
}

const Dashboard = () => {
  const [studentData, setStudentData] = useState<StudentData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('studentEnrollment');
    if (storedData) {
      setStudentData(JSON.parse(storedData));
    }
  }, []);

  if (!studentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gradient-card shadow-soft">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">No Enrollment Found</CardTitle>
            <p className="text-muted-foreground">You need to enroll in a course first!</p>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/">
              <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
                Go Back to Enrollment
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="bg-gradient-hero shadow-soft">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Welcome, {studentData.name}! 🎉
                </h1>
                <p className="text-white/90 mt-1">Your Learning Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <User className="h-4 w-4 text-white" />
              <span className="text-white font-medium">Age {studentData.age}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {studentData.courses.length}
                  </p>
                  <p className="text-muted-foreground">Enrolled Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {studentData.courses.length * 2}h
                  </p>
                  <p className="text-muted-foreground">Weekly Hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-success/10 rounded-full">
                  <User className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Active</p>
                  <p className="text-muted-foreground">Student Status</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Schedule */}
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              My Class Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {studentData.courses.map((course) => (
                <div
                  key={course.id}
                  className="p-6 bg-white rounded-xl shadow-soft border border-border hover:shadow-glow transition-smooth"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {course.name}
                    </h3>
                    <Badge variant="secondary" className="bg-gradient-secondary">
                      {course.level}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium text-foreground">{course.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Day:</span>
                      <span className="font-medium text-foreground">{course.day}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">Instructor:</span>
                      <span className="font-medium text-foreground">{course.instructor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;