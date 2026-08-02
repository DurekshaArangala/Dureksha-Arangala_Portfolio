/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, TimelineEvent, Certification } from './types';

export const personalInfo = {
  name: 'Dureksha Arangala',
  title: 'Aspiring Data Scientist | BSc(Hons) in Data Science (Undergraduate)',
  bio: [
    "I'm Dureksha Arangala, a Final-Year BSc (Hons) Data Science undergraduate at Sri Lanka Technology Campus (SLTC), passionate about Data Science, Artificial Intelligence, Machine Learning, and Data Analytics. I enjoy transforming complex data into meaningful insights by developing practical, data-driven solutions using Python, SQL, Machine Learning, Deep Learning, and Natural Language Processing.",
    "Beyond academics, I actively strengthen my leadership, collaboration, and problem-solving skills through my role as the Secretary of the IEEE Computer Society Student Branch Chapter at SLTC, as well as through hackathons, research activities, and technical community involvement. These experiences have helped me develop both technical expertise and the ability to work effectively in diverse teams.",
    "I am currently seeking a Data Scientist Internship opportunity where I can apply my analytical and technical skills, gain industry experience, contribute to impactful projects, and continue growing as a Data Scientist while solving real-world challenges through data-driven innovation."
  ],
  profileImage: '/images/Arangala_Dureksha.jpeg',
  cvImage: '/images/CVDownload.jpeg',
  stats: [
    { label: 'Projects', value: '6+' },
    { label: 'Achievements & Certifications', value: '5+' },
    { label: 'Hackathons', value: '3+' },
    { label: 'Leadership Roles', value: '10+' }
  ],
  socials: {
    email: 'durekshachammi2911@gmail.com',
    github: 'https://github.com/DurekshaArangala',
    linkedin: 'https://www.linkedin.com/in/dureksha-arangala-03668019a/',
    medium: 'https://medium.com/@durekshachammi2911'
    
  }
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 70, label: 'Intermediate' },
      { name: 'SQL', level: 60, label: 'Intermediate' },
      { name: 'R', level: 50, label: 'Intermediate' },
      { name: 'JavaScript', level: 20, label: 'Beginner' }
    ]
  },
  {
    title: 'ML / Deep Learning',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Scikit-learn', level: 80, label: 'Intermediate' },
      { name: 'PyTorch', level: 60, label: 'Intermediate' },
      { name: 'TensorFlow', level: 60, label: 'Intermediate' },
      { name: 'Hugging Face', level: 30, label: 'Beginner' }
    ]
  },
  {
    title: 'Data & Cloud',
    icon: 'Cloud',
    skills: [
      { name: 'Pandas / NumPy', level: 95, label: 'Advanced' },
      { name: 'Power BI / Tableau', level: 95, label: 'Advanced' },
      { name: 'Docker', level: 65, label: 'Intermediate' }
    ]
  },
  {
    title: 'MLOps & Tools',
    icon: 'Workflow',
    skills: [
      { name: 'GitHub', level: 80, label: 'Intermediate' },
      { name: 'MLflow', level: 75, label: 'Intermediate' },
      { name: 'FastAPI', level: 70, label: 'Intermediate' },
      { name: 'Airflow', level: 50, label: 'Beginner' }
    ]
  },
  {
    title: 'NLP / CV',
    icon: 'Cpu',
    skills: [
      
      { name: 'spaCy / NLTK', level: 60, label: 'Intermediate' },
      { name: 'OpenCV', level: 60, label: 'Intermediate' }
    ]
  },
  {
    title: 'Soft Skills',
    icon: 'Users',
    skills: [
      { name: 'Problem Solving', level: 90, label: 'Advanced' },
      { name: 'Analytical Thinking', level: 85, label: 'Advanced' },
      { name: 'Teamwork & Leadership', level: 90, label: 'Advanced' },
      { name: 'Project Management', level: 95, label: 'Advanced' },
      { name: 'Adaptability & Continuous Learning', level: 90, label: 'Advanced' }
    ]
  }
];

export const educationTimeline: TimelineEvent[] = [
  {
    year: '2023 - PRESENT',
    title: 'BSc. (Hons) Data Science',
    organization: 'Sri Lanka Technology Campous (SLTC), Faculty of Computing & IT',
    description: 'Building a strong foundation in Data Science, AI, and research through academic learning and hands-on projects.',
  },
  {
    year: '2021',
    title: 'GCE Advanced Level (A/L)',
    organization: 'WP/JAYA/P/Dharmapala Vidyalaya',
    description: 'Biological Science Stream (Biology, Physics, Chemistry)'
    
  },

];

export const experienceTimeline: TimelineEvent[] = [
  {
    year: '2025 - PRESENT',
    title: 'Advisory Panel (Secretary)',
    organization: 'IEEE Computer Society Student Branch Chapter of SLTC',
    description: 'Reviewing chapter operations, documentation, and coordination activities to support technical initiatives and student programs.',
    details: [
      'Preparing event proposals, agendas, reports, and meeting records',
      'Supporting technical events, workshops, and student initiatives',
      'Coordinating communication and documentation across chapter teams'
    ]
  },
   {
    year: '2024 - 2025',
    title: 'Editorial Deputy Head (Subcommittee)',
    organization: 'IEEE Computer Society Student Branch Chapter of SLTC',
    description: 'Managed chapter operations, documentation, and coordination activities to support technical initiatives and student programs.',
   
  }


];

export const volunteeringData = [

  {
    title: 'Coordinator - Nanasa (Ongoing), IEEE Young Professionals Sri Lanka Section',
    description: 'Coordinating project activities, team communication, and operational tasks to support successful project execution.',
    tag: 'Project Coordination'
  },

  
  {title: 'Secretary Team Member - MASTER DESIGNER v3.0, Media Unit SLTC | 2026',
    description: 'Supporting event documentation, coordination, and administrative operations.',
    tag: 'Documentation'
  }, 

  {
    title: 'Deputy Head - Logistics Team, ITIA Career v1.0 | 2025',
    description: 'Coordinating logistics planning and operational activities to ensure smooth event execution.',
    tag: 'Event Coordination'
  },

  {
    title:'Secretary - CloudSpace v1.0',
    description: 'Coordinated event planning and managed organizational activities',
    tag: 'Editorial Leadeship'
  },
  {
    title: 'Content & Caption Team Head - Sipsari Yathra, LEO Club SLTC',
    description: 'Leading content creation and social media communication strategies to enhance project visibility.',
    tag: 'Content Creation'
  },
  
  {
    title: 'Program Team Member - Venturify Project | 2024',
    description: 'Contributing to the planning and execution of innovation-focused programs and student development initiatives.',
    tag: 'Program Management'
  }
];

export const projectsData: Project[] = [
  {
    id: 'hate-speech-classification',
    title: 'Hate Speech Classification - End-to-End NLP Pipeline',
    image: '/images/projects/hate-speech-classification.png',
    description: 'Deep learning based NLP system for detecting hate speech using text preprocessing, model training, and deployment workflow.',
    category: 'NLP',
    tags: ['Python', 'NLP', 'TensorFlow', 'Deep Learning'],
    metrics: [
      { label: 'Pipeline', value: 'End-to-End' },
      { label: 'Model Type', value: 'Deep Learning' }
    ],
    details: [
      'Implemented complete NLP pipeline including data ingestion, preprocessing, transformation, and model training',
      'Built text classification model using TensorFlow with automated training workflow',
      'Developed deployment-ready structure with API integration capabilities'
    ],
    githubUrl: 'https://github.com/DurekshaArangala/End-to-End-NLP-Project_Hate-Speech-Classification',
    liveUrl: '#'
  },



  {
    id: 'customer-shopping-behavior-analysis',
    title: 'Customer Shopping Behavior Analysis',
    description: 'Data analytics project analyzing customer purchasing patterns and generating business insights through visualization.',
    image : "/images/customer-shopping-behavior-analysis.png",
    category: 'Data Analytics',
    tags:['Python', 'Pandas', 'SQL', 'Power BI'],
    metrics: [
      { label: 'Analysis', value: 'Customer Insights' },
      { label: 'Tools', value: 'Python + BI' }
    ],
    details: [
      'Performed exploratory data analysis to identify customer purchasing trends',
      'Used SQL-based analysis to extract business insights',
      'Created interactive dashboards for data-driven decision making'
    ],
    githubUrl: 'https://github.com/DurekshaArangala/customer_shopping_behavior_analysis',
    liveUrl: '#'
  },

  {
    id: 'ecommerce-bigdata-analytics',
    title: 'E-Commerce Big Data Analytics Pipeline',
    image: "/images/ecommerce-bigdata-analytics.png",
    description: ' Big data analytics pipeline designed to process and analyze large-scale e-commerce data.',
    category: 'Data Analytics',
    tags: ['Python', 'Big Data', 'Data Pipeline', 'Analytics', 'Pyspark'],
    metrics: [
      { label: 'Pipeline', value: 'Data Processing' },
      { label: 'Domain', value: 'E-Commerce' }
    ],
    details: [
      'Designed data processing workflow for large-scale datasets',
      'Applied analytics techniques to extract business insights',
      'Explored scalable approaches for handling large data volumes'
    ],
    githubUrl: 'https://github.com/DurekshaArangala/ecommerce-bigdata-analytics-pipeline',
    liveUrl: '#'
  },



  {
    id: 'customer-demand-forecasting',
    title: 'Customer Demand Forecasting System',
    image: "/images/customer-shopping-behavior-analysis.png",
    description: 'Machine learning system developed to predict future customer demand patterns for business planning.',
    category: 'Machine Learning',
    tags:['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
    metrics: [
      { label: 'Model', value: 'ML Forecasting' },
      { label: 'Workflow', value: 'End-to-End' }
    ],
    details: [
      'Performed data preprocessing and exploratory analysis on demand data',
      'Trained and evaluated machine learning models for demand prediction',
      'Developed prediction workflow for future demand estimation'
    ],
    githubUrl: 'https://github.com/DurekshaArangala/Customer-Demand-Forecasting-System-',
    liveUrl: '#'
  },



  {
    id: 'postpartum-depression-prediction',
    title: 'Postpartum Depression Prediction and Recovery Support(Ongoing)',
    image: "/images/customer-shopping-behavior-analysis.png",
    description: 'AI-based healthcare support system combining machine learning and explainable AI approaches.',
    category: 'Machine Learning',
    tags: ['Python', 'Machine Learning', 'NLP', 'XAI'],
    metrics: [
      { label: 'Focus', value: 'Healthcare AI' },
      { label: 'Approach', value: 'ML + XAI' }

    ],
    details: [
      'Developing predictive models for postpartum depression risk assessment',
      'Exploring explainable AI techniques for transparent predictions',
      'Designing a user-focused recovery support application'

    ],
    githubUrl: 'https://github.com/DurekshaArangala/postpartum-depression-prediction-and-recovery',
    liveUrl: '#'
  },



  {
    id: 'telecom-churn-mlops',
    title: 'End-to-End MLOps Pipeline for Telecom Customer Churn Prediction',
    image: "/images/customer-shopping-behavior-analysis.png",
    description: 'A production-ready MLOps solution for predicting telecom customer churn using machine learning, automated pipelines, experiment tracking, model versioning, and REST API deployment.',
    category: 'Machine Learning',
    tags: ['Python','Scikit-learn','MLflow','DVC','Apache Airflow',
    'FastAPI',
    'Docker',
    'DAGsHub',
    'Git'],

    metrics: [
        { label: 'Dataset', value: '7,043 Customers' },
        { label: 'Models', value: '3 ML Models' },
        {label: 'Best Model', value: 'Logistic Regression' }
    ],
    details: [
      'Built an end-to-end MLOps pipeline for telecom customer churn prediction, covering data ingestion, preprocessing, model training, evaluation, and deployment.',
      'Implemented automated data and model versioning using DVC with DAGsHub remote storage.',
       'Tracked machine learning experiments, metrics, parameters, and model artifacts using MLflow.',
        'Orchestrated the complete ML workflow with Apache Airflow for reproducible and automated pipeline execution.',
        'Developed a FastAPI REST API to serve real-time churn predictions and containerized the application using Docker.',
       'Integrated Git, Docker, DVC, MLflow, and DAGsHub to create a production-ready machine learning workflow.'
  ],
    
    githubUrl: 'https://dagshub.com/DUREKSHA-758/MLOps_Churn_Project',
    liveUrl: '#'
  }, 



  {
    id: 'smart-restaurant-menu',
    title: 'Smart Restaurant Menu with AI Chatbot',
    image: "/images/customer-shopping-behavior-analysis.png",
    description: 'Interactive restaurant management system with chatbot-based customer assistance.',
    category: 'Full Stack Development',
    tags: ['React', 'Node.js', 'Firebase', 'Dialogflow'],
    metrics: [
      { label: 'Platform', value: 'Web Application' },
      { label: 'AI', value: 'Chatbot Integration' }
    ],
    details: [
      'Developed interactive digital restaurant menu interface',
      'Integrated chatbot functionality for customer interaction',
      'Implemented cloud-based backend services using Firebase'
    ],
    githubUrl: 'https://github.com/DurekshaArangala/smart-restaurant-menu',
    liveUrl: '#'
  }



];

export const certificationsData: Certification[] = [
  {
    id: 'data-science-101-ibm',
    title: 'Data Science 101',
    issuer: 'IBM SkillsBuild',
    date: '2025',
    credentialId: 'DL-AI-928374982',
    link: 'https://coursera.org'
  },
  {
    id: 'ieee-xtreme-19',
    title: 'IEEE Xtreme Programming Competition 19.0 ',
    issuer: 'IEEE',
    date: '2025',
    credentialId: 'TF-DEV-83940283',
    link: 'https://credential.net'
  },
    {
    id: 'inspihER-tech-v4-hacknova',
    title: 'First Runner Up | InspiHER{Tech} V4.0 - HackNova Competition',
    issuer: 'IEEE WIE, SLTC',
    date: '2026',
    credentialId: 'IBM-DS-73928402',
    link: 'https://coursera.org'
  },
  {
    id: 'biofusion-hackathon',
    title: 'BioFusion Hackathon',
    issuer: 'IEEE Engineering in Medicine and Biology Society (EMBS), USJP',
    date: '2025',
    credentialId: 'MS-AZ-DS-10293847',
    link: 'https://learn.microsoft.com'
  },
  {
    id: 'emerging-scholars-research',
    title: 'Emerging Scholars Research Programme - Certificate Phase Completion',
    issuer: 'Faculty of Postgraduate Studies & Research, SLTC',
    date: '2025',
    credentialId: 'GCP-ACE-98273419',
    link: 'https://credential.net'
  }
];
