import projectOneImage from '../assets/flieconv.png';
import projectTwoImage from '../assets/spotifyMac.png';
import projectThreeImage from '../assets/kv1.png';

export const projects = [
    {
        title: 'File Converter Local',
        link: 'https://example.com',
        description: 'File Converter Local is a web application that allows users to host their own file conversion service replacing the unsecure ones on the internet. Users can upload files, select the desired output format, and download the converted files.',
        technologies: ['React', 'Tailwind CSS', 'Node.js', 'FFmpeg', 'Docker'],
        screenshot: projectOneImage, // replace with your image URL
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