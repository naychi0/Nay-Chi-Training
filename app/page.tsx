import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RegistrationForm } from "@/components/registration-form"
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  MapPin,
  Menu,
  Monitor,
  Users,
  Zap,
  CheckCircle,
  Star,
  Clock,
  BookOpen,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <GraduationCap className="h-4 w-4" />
            </div>
            <span className="text-blue-500">Nay Chi Training</span>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-blue-500">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-blue-500">
              About
            </Link>
            <Link href="#training" className="text-sm font-medium transition-colors hover:text-blue-500">
              Training
            </Link>
            <Link href="#materials" className="text-sm font-medium transition-colors hover:text-blue-500">
              Materials
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-blue-500">
              Pricing
            </Link>
            <Link href="#register" className="text-sm font-medium transition-colors hover:text-blue-500">
              Register
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex text-blue-500 hover:text-blue-500 hover:bg-blue-50"
              asChild
            >
              <Link href="#register">Get in Touch</Link>
            </Button>
            <Button size="sm" className="hidden md:flex bg-blue-500 hover:bg-blue-600" asChild>
              <Link href="#register">Register Now</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Myanmar</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-500">
                    NAY CHI
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold text-orange-400 mb-4">
                    Professional Trainer & Development Expert
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transform your career with expert training in soft skills, sales, and technical development. Former
                    Samsung Trainer with proven experience in workplace performance improvement.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1 bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="#training">
                      Explore Training <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                    asChild
                  >
                    <Link href="#register">Register Now</Link>
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto overflow-hidden rounded-xl sm:w-full lg:order-last">
                <div className="aspect-[4/5] w-full max-w-[500px]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-03-11_15-41-06.jpg-bmZPpV0rBhqcI7JqpwauHFWRvQF6Vd.jpeg"
                    width={500}
                    height={625}
                    alt="Nay Chi at Galaxy Campus Tour - Professional Training Experience"
                    className="object-cover w-full h-full rounded-xl shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Professional Background</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2">
              <Card className="hover:border-blue-500 transition-colors">
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle>Education & Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Diploma in Information Technology</p>
                    <p className="text-xs text-muted-foreground">MIBA University, ABE endorsed</p>
                    <p className="text-sm font-medium">NCC Level 4 Diploma in Computing</p>
                    <p className="text-xs text-muted-foreground">Current student</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-colors">
                <CardHeader>
                  <Briefcase className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle>Professional Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm">1.Care - Training & Development Executive</p>
                      <p className="text-xs text-muted-foreground">Current Position</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Samsung Myanmar - Professional Trainer</p>
                      <p className="text-xs text-muted-foreground">Former Position</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Wattpad - Writer & Community Leader</p>
                      <p className="text-xs text-muted-foreground">Creative Role</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section id="training" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">
                  Training Programs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What You'll Learn</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Comprehensive training programs designed to enhance your professional skills and career growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:border-blue-500 transition-colors bg-white">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle>Soft Skills & Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Effective Communication Techniques</li>
                    <li>• Leadership & Team Management</li>
                    <li>• Presentation Skills</li>
                    <li>• Conflict Resolution</li>
                    <li>• Time Management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-colors bg-white">
                <CardHeader>
                  <Zap className="h-10 w-10 text-orange-400 mb-2" />
                  <CardTitle>Sales & Customer Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Sales Techniques & Strategies</li>
                    <li>• Customer Relationship Management</li>
                    <li>• Product Knowledge Training</li>
                    <li>• Objection Handling</li>
                    <li>• Closing Techniques</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-colors bg-white">
                <CardHeader>
                  <Monitor className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle>Technical & Digital Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• IT Fundamentals</li>
                    <li>• Python Programming Basics</li>
                    <li>• Digital Tools & Platforms</li>
                    <li>• E-learning Systems</li>
                    <li>• Content Creation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-colors bg-white">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-orange-400 mb-2" />
                  <CardTitle>Instructional Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Learning Objectives Design</li>
                    <li>• Content Development</li>
                    <li>• Assessment Strategies</li>
                    <li>• E-learning Creation</li>
                    <li>• Training Evaluation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-colors bg-white">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle>Train-the-Trainer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Adult Learning Principles</li>
                    <li>• Facilitation Techniques</li>
                    <li>• Training Delivery Methods</li>
                    <li>• Engagement Strategies</li>
                    <li>• Performance Coaching</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-colors bg-white">
                <CardHeader>
                  <Star className="h-10 w-10 text-orange-400 mb-2" />
                  <CardTitle>Professional Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Career Planning</li>
                    <li>• Personal Branding</li>
                    <li>• Networking Skills</li>
                    <li>• Interview Preparation</li>
                    <li>• Goal Setting & Achievement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Materials Section */}
        <section id="materials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">
                  Training Materials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Professional Training Resources</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  High-quality training materials and presentation slides developed from years of professional
                  experience.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-blue-500">Training Presentation Slides</CardTitle>
                  <CardDescription>
                    Professional slides covering various training topics with real-world applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="aspect-video bg-white rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <p className="text-sm font-medium">Communication Skills</p>
                        <p className="text-xs text-muted-foreground">Professional Presentation</p>
                      </div>
                    </div>
                    <div className="aspect-video bg-white rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center">
                      <div className="text-center">
                        <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <p className="text-sm font-medium">Leadership Training</p>
                        <p className="text-xs text-muted-foreground">Management Development</p>
                      </div>
                    </div>
                    <div className="aspect-video bg-white rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center">
                      <div className="text-center">
                        <Zap className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <p className="text-sm font-medium">Sales Excellence</p>
                        <p className="text-xs text-muted-foreground">Advanced Techniques</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button
                      variant="outline"
                      className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                      asChild
                    >
                      <Link href="mailto:naychi221997@gmail.com?subject=Request Training Materials">
                        Request Complete Materials
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">Pricing Plans</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Choose Your Training Package</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Flexible training options to suit your learning needs and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              {/* Free Plan */}
              <Card className="relative bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-blue-500">Free</CardTitle>
                      <CardDescription>Get started with basics</CardDescription>
                    </div>
                    <Badge variant="outline">Popular</Badge>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">Free</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Access to basic training materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">2 free webinar sessions per month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Community forum access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Email support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Self-paced learning</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="#register">Get Started Free</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative border-blue-500 border-2 bg-white">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500">Most Popular</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-blue-500">Premium</CardTitle>
                      <CardDescription>For serious learners</CardDescription>
                    </div>
                    <Badge className="bg-blue-500">Best Value</Badge>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">50,000</span>
                    <span className="ml-1 text-muted-foreground">MMK/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">All Free plan features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Weekly 1-on-1 coaching sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Access to all training modules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Personalized learning path</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Certificate of completion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Priority support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="#register">Start Premium</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Pro Plan */}
              <Card className="relative bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-blue-500">Premium Pro</CardTitle>
                      <CardDescription>For organizations & teams</CardDescription>
                    </div>
                    <Badge variant="outline">Enterprise</Badge>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">80,000</span>
                    <span className="ml-1 text-muted-foreground">MMK/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">All Premium plan features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Unlimited 1-on-1 sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Custom training programs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Team training sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Advanced analytics & reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">24/7 dedicated support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="#register">Contact for Pro</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">Registration</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Start Your Training Journey</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Fill out the form below to register for training programs. I'll contact you within 24 hours to discuss
                  your needs.
                </p>
              </div>
            </div>
            <RegistrationForm />
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 bg-blue-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <GraduationCap className="h-4 w-4" />
            </div>
            <span className="text-blue-500">Nay Chi Training</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nay Chi Training. Professional Development & Training Services.
          </p>
          <div className="flex gap-4">
            <Link href="mailto:naychi221997@gmail.com" className="text-sm text-muted-foreground hover:text-blue-500">
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/nay-chi-5a1774292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-sm text-muted-foreground hover:text-blue-500"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
