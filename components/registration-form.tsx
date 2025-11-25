"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { User } from "lucide-react"

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    experience: "",
    goals: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const emailBody = `
Training Registration Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Selected Plan: ${formData.plan}
Experience Level: ${formData.experience}
Training Goals: ${formData.goals}
Newsletter Subscription: ${formData.newsletter ? "Yes" : "No"}
    `.trim()

    const mailtoLink = `mailto:naychi221997@gmail.com?subject=Training Registration - ${formData.plan}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-blue-500 flex items-center gap-2">
          <User className="h-5 w-5" />
          Training Registration
        </CardTitle>
        <CardDescription>
          Fill out this form to register for training programs. I'll contact you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="focus-visible:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="focus-visible:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="focus-visible:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="plan">Training Plan *</Label>
            <Select value={formData.plan} onValueChange={(value) => handleInputChange("plan", value)} required>
              <SelectTrigger className="focus:ring-blue-500">
                <SelectValue placeholder="Select a training plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Free Plan</SelectItem>
                <SelectItem value="premium">Premium Plan (50,000 MMK/month)</SelectItem>
                <SelectItem value="premium-pro">Premium Pro Plan (80,000 MMK/month)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level</Label>
            <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
              <SelectTrigger className="focus:ring-blue-500">
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals">Training Goals</Label>
            <Textarea
              id="goals"
              placeholder="Tell me about your training goals and what you hope to achieve..."
              value={formData.goals}
              onChange={(e) => handleInputChange("goals", e.target.value)}
              className="min-h-[100px] focus-visible:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
              className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
            />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to newsletter for training tips and updates
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
            disabled={!formData.name || !formData.email || !formData.plan}
          >
            Submit Registration
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
