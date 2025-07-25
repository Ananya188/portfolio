import React from 'react'

const skills = [
    // Frontend
    {name:"HTML/CSS",level: 80,category:"frontend"},
    {name:"JavaScript",level: 90,category:"frontend"},
    {name:"React",level: 85,category:"frontend"},
    {name:"ReactNative",level: 80,category:"frontend"},
    {name:"Tailwind CSS",level: 90,category:"frontend"},

    // Backend
    {name:"JavaScript(Node.js)",level: 95,category:"backend"},
    {name:"Django",level: 80,category:"backend"},
    {name:"SpringBoot",level: 93,category:"backend"},
    {name:"Laravel",level: 77,category:"backend"},
    {name:"Express",level: 95,category:"backend"},
    {name:"MongoDB",level: 95,category:"backend"},

    // Database
    {name:"MongoDB",level: 95,category:"database"},
    {name:"MySql",level: 95,category:"backend"},

    // Tools
    {name:"Git/GitHub",level: 80,category:"tools"},
    {name:"Docker",level: 70,category:"tools"},
    {name:"VsCode",level: 97,category:"tools"},
    {name:"Anaconda",level: 75,category:"tools"},
    {name:"AWS",level: 80,category:"tools"},
    {name:"Myphpadmin",level: 80,category:"tools"},
    {name:"AndroidStudio",level: 60,category:"tools"},
]

const SkillsSection = () => {
  return (
    <section id='skills' 
    className="py-24 px-4 relative bg-secondary">

    </section>
  )
}

export default SkillsSection