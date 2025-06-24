import { Mail, Phone, MapPin, Github, Linkedin, Download, Calendar, Award, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead development of web applications using React, TypeScript, and Node.js. Managed a team of 5 developers and implemented agile methodologies.",
      achievements: [
        "Increased application performance by 40%",
        "Led migration to modern tech stack",
        "Mentored junior developers"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using various technologies including React, Vue.js, and Python.",
      achievements: [
        "Delivered 15+ projects on time",
        "Reduced bug reports by 60%",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description: "Built responsive web applications and collaborated with design teams to create intuitive user interfaces.",
      achievements: [
        "Improved user engagement by 35%",
        "Created reusable component library",
        "Optimized loading times by 50%"
      ]
    }
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React & Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "SQL & NoSQL", level: 85 },
    { name: "AWS/Cloud", level: 75 },
    { name: "Docker & Kubernetes", level: 70 },
    { name: "UI/UX Design", level: 80 }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Technology",
      period: "2016 - 2018",
      gpa: "3.8/4.0"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "Tech University",
      period: "2012 - 2016",
      gpa: "3.6/4.0"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header/Hero Section */}
      <section className="relative bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                JD
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
                John Doe
              </h1>
              <h2 className="text-2xl text-purple-600 font-semibold mb-6">
                Senior Software Engineer
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Passionate software engineer with 6+ years of experience building scalable web applications. 
                Expert in modern JavaScript frameworks and cloud technologies. Proven track record of leading 
                teams and delivering high-quality solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>john.doe@email.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <Users className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900">Professional Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <p className="text-xl text-purple-600 font-semibold">{job.company}</p>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-purple-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{edu.school}</p>
                  <div className="flex justify-between items-center text-gray-600">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="font-semibold">GPA: {edu.gpa}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always interested in discussing new opportunities and exciting projects.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
