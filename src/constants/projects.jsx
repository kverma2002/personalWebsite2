import projectOneImage from '../assets/flieconv.png';
import projectTwoImage from '../assets/spotifyMac.png';
import projectThreeImage from '../assets/kv1.png';
import projectFourImage from '../assets/cicdproj.png';
import projectFiveImage from '../assets/TTSproj.jpg';
import projectSixImage from '../assets/project6.jpeg';

export const projects = [
    {
        title: 'DevOps Workflow: CI/CD Automation & EKS Deployment',
        link: 'https://github.com/kverma2002/cicd_project_eks',
        description: 'Demonstrates a full DevOps pipeline for an application with a front end and backend. The focus is on containerization, CI/CD automation, infrastructure provisioning with Terraform and deployment to Amazon EKS.',
        technologies: ['CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'EKS'],
        screenshot: projectFourImage, // replace with your image URL
    },
    {
        title: 'File Converter Local',
        link: 'https://localfileconverter.com',
        description: 'File Converter Local is a web application that allows users to host their own file conversion service replacing the unsecure ones on the internet. Users can upload files, select the desired output format, and download the converted files.',
        technologies: ['React', 'Tailwind CSS', 'Node.js', 'FFmpeg', 'Docker'],
        screenshot: projectOneImage, // replace with your image URL
    },
    {
        title: 'Text To Speech Extension',
        link: 'https://github.com/kverma2002/free_tts_extension',
        description: 'File Converter Local is a web application that allows users to host their own file conversion service replacing the unsecure ones on the internet. Users can upload files, select the desired output format, and download the converted files.',
        technologies: ['AWS', 'Javascript', 'Lambda', 'Terraform'],
        screenshot: projectFiveImage, // replace with your image URL
    },
    {
        title: 'Twitter Sentiment Analysis Write UpIntro To Machine Leanring Sentiment Analysis Write',
        link: 'https://github.com/kverma2002/SpotifyMenu-MacOS',
        description: 'USC CSCI 467: Introduction to Machine Learning Final Project analyzing the sentiment of tweets using a dataset of 1.6 million tweets. The project uses a variety of machine learning models to classify the sentiment of the tweets.',
        technologies: ['Machine Learning','Python', 'Pandas', 'Numpy', 'Scikit-learn'],
        screenshot: projectSixImage, // No screenshot, so a "Visit" button will be shown
    },
    {
        title: 'Sportify Menu MacOS',
        link: 'https://github.com/kverma2002/SpotifyMenu-MacOS',
        description: 'Swift app that allows the user to use a shortcut to pop up simplified Spotify menu over their current screen. The menu allows the user to play/pause, skip, and go back to the previous song. The user can also see the current song playing.',
        technologies: ['Swift', 'AppleScript'],
        screenshot: projectTwoImage, // No screenshot, so a "Visit" button will be shown
    },
    {
        title: 'Krit Verma Portfolio v1',
        link: 'https://kritverma.com',
        description: 'First Iteration of My Portfolio Website. Hosted on Vercel.',
        technologies: ['React', 'CSS', 'Vercel'],
        screenshot: projectThreeImage, // No screenshot, so a "Visit" button will be shown
    },
    // Add more projects as needed
];