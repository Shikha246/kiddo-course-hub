import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import EnrollmentForm from '@/components/EnrollmentForm';
import { BookOpen, Users, Clock, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <div className="bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Learn, Create, 
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Inspire! ✨
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Join our amazing courses designed specially for young minds. 
              Discover coding, art, robotics and more!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-glow transition-bounce text-lg px-8 py-6"
              >
                Start Learning Today! 🚀
              </Button>
              <Link to="/dashboard">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20 text-lg px-8 py-6"
                >
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Kids Love Our Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make learning fun, interactive, and engaging for young minds
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Interactive Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on projects and activities that make learning exciting
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-secondary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Expert Instructors</h3>
                <p className="text-sm text-muted-foreground">
                  Experienced teachers who understand how kids learn best
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-success/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Flexible Schedule</h3>
                <p className="text-sm text-muted-foreground">
                  Weekend classes that fit your family's busy schedule
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-yellow-500/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Small Classes</h3>
                <p className="text-sm text-muted-foreground">
                  Personal attention with small class sizes for better learning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enrollment Section */}
      <div className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <EnrollmentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
