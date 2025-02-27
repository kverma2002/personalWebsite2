import React from 'react';
import cert1Image from '../assets/AWS-DEV-PRO.png';
import cert2Image from '../assets/AWS-SA-PRO.png';
import cert3Image from '../assets/AWS-SysOps-ASSOC.png';
import cert4Image from '../assets/AWS-SA-ASSOC.png';
import cert5Image from '../assets/AWS-DEV-ASSOC.png';

const CertCarousel = () => {
  const certifications = [
    { 
      name: 'DevOps Pro', 
      image: cert1Image, 
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/5c10f93df6714c6e8560ceef21083d1c',
      description: 'Validates technical expertise in provisioning, operating, and managing distributed application systems on the AWS platform.'
    },
    { 
      name: 'SA Pro', 
      image: cert2Image, 
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/4d8a7c2ae4f7431fba8bbd9359905181',
      description: 'Validates advanced knowledge of designing distributed systems on AWS, including complex architecture for multi-tier applications.'
    },
    { 
      name: 'SysOps Admin', 
      image: cert3Image, 
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/79e5ef82569b4899bad51f4d1f91ccf0',
      description: 'Focuses on the ability to deploy, manage, and operate workloads on AWS, including implementing security controls and compliance requirements.'
    },
    { 
      name: 'SA Associate', 
      image: cert4Image, 
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/99ec89ea3e9c4f78913cf5bbe4fc8682',
      description: 'Validates knowledge of designing available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.'
    },
    { 
      name: 'Developer Associate', 
      image: cert5Image, 
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/133d1a9884e149bfb1dbfbf563ad619e',
      description: 'Demonstrates knowledge of developing, deploying, and debugging cloud-based applications using AWS.'
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
            <a
            href={cert.link}
            target="_blank" 
            rel="noopener noreferrer"
            >
                <div key={index} className="group relative">
                    <img
                        src={cert.image}
                        alt={cert.name}
                        className="h-28 w-auto mx-auto transition-transform transform hover:scale-110"
                    />
                </div>
            </a>
        ))}
    </div>
);

  
};

export default CertCarousel;
