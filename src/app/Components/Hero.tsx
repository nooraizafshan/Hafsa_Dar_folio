import React from 'react'
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, Award, BookOpen, Users, Globe } from "lucide-react";

const Hero = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="Dr. Hafsa Shareef Dar"
            width={240}
            height={240}
            className="rounded-full border-4 border-teal-100 shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-6 text-center">Dr. Hafsa Shareef Dar</h1>
          <p className="text-gray-700 mt-2 text-center">
            PhD in Software Engineering<br />
            HEC-Approved Supervisor<br />
            Lecturer & Researcher
          </p>
          
          {/* Achievement Badges */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="flex items-center gap-2 px-3 py-2 bg-teal-50 rounded-lg">
              <Award className="h-4 w-4 text-teal-700" />
              <span className="text-xs text-gray-700">PM Youth Award Mentor</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-teal-50 rounded-lg">
              <Users className="h-4 w-4 text-teal-700" />
              <span className="text-xs text-gray-700">Women in Big Data</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-teal-50 rounded-lg">
              <Globe className="h-4 w-4 text-teal-700" />
              <span className="text-xs text-gray-700">IVLP Alumni</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-teal-50 rounded-lg">
              <BookOpen className="h-4 w-4 text-teal-700" />
              <span className="text-xs text-gray-700">Gamify4Req Creator</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-teal-700 hover:text-teal-900 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="text-gray-800 max-w-2xl">
          <p className="mb-5 text-lg leading-relaxed">
            A dedicated academic and professional with years of experience in both academia and the software industry. 
            As an <strong>HEC-approved supervisor</strong>, I've mentored numerous students toward innovation and excellence, 
            including one who received the prestigious <strong>Prime Minister Youth Innovation Award</strong> in 2023.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-teal-700 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Academic Leadership
              </h3>
              <p className="text-gray-700 mt-1 pl-6">
                Currently serving as <strong>Lecturer in Software Engineering</strong>, specializing in core courses, 
                research, and outcome-based learning approaches.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 flex items-center gap-2">
                <Globe className="h-4 w-4" />
                STEM Advocacy
              </h3>
              <p className="text-gray-700 mt-1 pl-6">
                As <strong>Co-Director of Women in Big Data (Pakistan)</strong>, I spearhead initiatives to help women 
                gain expertise in data science and software engineering. IVLP alumna under "Promoting STEM for Girls."
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Research Focus
              </h3>
              <p className="text-gray-700 mt-1 pl-6">
                My work in <strong>gamification, NLP, and generative AI</strong> includes developing Gamify4Req, 
                a tool to reduce ambiguity in natural language requirements. Active reviewer for reputed journals.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-teal-50 p-4 rounded-lg border border-teal-100">
            <p className="text-gray-800 italic">
              "Driven by a vision of inclusive and sustainable growth in technology and education. 
              Let's connect to collaborate, innovate, and create impactful solutions!"
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero