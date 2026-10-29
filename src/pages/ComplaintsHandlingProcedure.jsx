import React, { useEffect } from 'react';
import useSEO from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function ComplaintsHandlingProcedure() {
  useSEO("Complaints Handling Procedure | GGS Utilities", "Complaints Handling Procedure for Get Green Solutions Ltd T/a GGS Utilities.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageHtml = `<style>
        
        
        .complaints-section {
            max-width: 1200px;
            margin: 0 auto 40px auto;
            padding: 40px;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }
        
        .section-header h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #139268;
            margin-bottom: 15px;
        }
        
        .section-header p {
            font-size: 1.1rem;
            color: #555;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
        }
        
        .promise-section {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 40px;
            margin-bottom: 50px;
            background: linear-gradient(135deg, #f0f9f6 0%, #e6f7ff 100%);
            padding: 40px;
            border-radius: 12px;
        }
        
        .promise-image {
            flex: 1;
            min-width: 300px;
            text-align: center;
        }
        
        .promise-image img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .promise-content {
            flex: 2;
            min-width: 300px;
        }
        
        .promise-content h3 {
            color: #139268;
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .promise-content p {
            font-size: 1.05rem;
            line-height: 1.7;
            color: #444;
        }
        
        .complaint-methods {
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            margin-bottom: 50px;
            border-left: 4px solid #139268;
        }
        
        .complaint-methods h3 {
            color: #139268;
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .methods-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
            margin-top: 20px;
        }
        
        .method-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .method-item:hover {
            transform: translateY(-3px);
            background: #f0f9f6;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .method-icon {
            font-size: 1.5rem;
            color: #139268;
            background: #e6f7f2;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .method-content h4 {
            font-size: 1.1rem;
            margin-bottom: 5px;
            color: #2c3e50;
        }
        
        .method-content p {
            color: #555;
            font-size: 1rem;
        }
        
        .requirements {
            margin-top: 25px;
            padding: 25px;
            background: #f8f9fa;
            border-radius: 8px;
        }
        
        .requirements h4 {
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: 1.2rem;
        }
        
        .requirements ul {
            list-style-type: none;
            padding-left: 5px;
        }
        
        .requirements li {
            margin-bottom: 12px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            color: #444;
            font-size: 1.05rem;
        }
        
        .requirements li i {
            color: #139268;
            margin-top: 4px;
        }
        
        .process-section {
            margin-bottom: 50px;
        }
        
        .process-section h3 {
            color: #139268;
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 30px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        .process-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }
        
        .step-card {
            background: #fff;
            padding: 30px 25px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-top: 4px solid #139268;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .step-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .step-icon {
            font-size: 2.5rem;
            color: #139268;
            background: #e6f7f2;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
        }
        
        .step-number {
            display: inline-block;
            background: #139268;
            color: white;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            line-height: 35px;
            text-align: center;
            margin-bottom: 15px;
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .step-card h4 {
            font-size: 1.3rem;
            color: #2c3e50;
            margin-bottom: 15px;
        }
        
        .step-card p {
            color: #555;
            font-size: 1rem;
            line-height: 1.6;
        }
        
        .escalation-section {
            background: linear-gradient(135deg, #f0f9f6 0%, #e6f7ff 100%);
            padding: 40px;
            border-radius: 12px;
            margin-bottom: 50px;
        }
        
        .escalation-section h3 {
            color: #139268;
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .escalation-section p {
            color: #444;
            font-size: 1.05rem;
            line-height: 1.7;
            margin-bottom: 20px;
        }
        
        .ombudsman-contact {
            margin-top: 30px;
        }
        
        .ombudsman-contact h4 {
            color: #2c3e50;
            font-size: 1.3rem;
            margin-bottom: 20px;
            border-bottom: 2px solid #139268;
            padding-bottom: 10px;
        }
        
        .contact-methods {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }
        
        .contact-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .contact-icon {
            font-size: 1.5rem;
            color: #139268;
            background: #e6f7f2;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .contact-details {
            flex: 1;
        }
        
        .contact-details strong {
            color: #2c3e50;
            display: block;
            margin-bottom: 5px;
            font-size: 1.1rem;
        }
        
        .contact-details span {
            color: #555;
            font-size: 0.95rem;
        }
        
        .accessibility-section {
            text-align: center;
            padding: 40px 30px;
            background: #139268;
            color: #fff;
            border-radius: 12px;
        }
        
        .accessibility-section h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        .accessibility-section p {
            max-width: 700px;
            margin: 0 auto;
            font-size: 1.05rem;
            line-height: 1.6;
        }
        
        /* Mobile Responsiveness */
        @media (max-width: 992px) {
            .complaints-section {
                padding: 30px;
            }
            
            .section-header h2 {
                font-size: 2.2rem;
            }
            
            .promise-section {
                padding: 30px;
                gap: 30px;
            }
        }
        
        @media (max-width: 768px) {
            .complaints-section {
                padding: 25px 20px;
                margin: 30px auto;
            }
            
            .section-header h2 {
                font-size: 2rem;
            }
            
            .section-header p {
                font-size: 1rem;
            }
            
            .promise-section {
                flex-direction: column;
                text-align: center;
                padding: 30px 20px;
                gap: 25px;
                margin-bottom: 40px;
            }
            
            .promise-content h3 {
                justify-content: center;
                font-size: 1.6rem;
            }
            
            .promise-content p {
                font-size: 1rem;
                text-align: left;
            }
            
            .complaint-methods {
                padding: 25px 20px;
            }
            
            .complaint-methods h3 {
                font-size: 1.6rem;
            }
            
            .methods-list {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .method-item {
                padding: 18px;
            }
            
            .requirements {
                padding: 20px;
            }
            
            .process-section h3 {
                font-size: 1.6rem;
            }
            
            .process-steps {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .step-card {
                padding: 25px 20px;
            }
            
            .escalation-section {
                padding: 30px 25px;
            }
            
            .escalation-section h3 {
                font-size: 1.6rem;
            }
            
            /* Increased spacing for contact methods on mobile */
            .contact-methods {
                grid-template-columns: 1fr;
                gap: 25px; /* Increased from 20px */
            }
            
            .contact-item {
                padding: 25px 20px; /* Increased padding for mobile */
                margin-bottom: 10px; /* Added extra spacing */
            }
            
            .accessibility-section {
                padding: 30px 20px;
            }
        }
        
        @media (max-width: 480px) {
            .section-header h2 {
                font-size: 1.8rem;
            }
            
            .promise-section {
                padding: 25px 15px;
            }
            
            .promise-content h3 {
                font-size: 1.5rem;
            }
            
            .complaint-methods, .escalation-section {
                padding: 20px 15px;
            }
            
            .complaint-methods h3, .escalation-section h3, .process-section h3 {
                font-size: 1.5rem;
            }
            
            .method-icon, .contact-icon {
                width: 45px;
                height: 45px;
                font-size: 1.3rem;
            }
            
            .step-icon {
                width: 70px;
                height: 70px;
                font-size: 2rem;
            }
            
            /* Further increased spacing for very small screens */
            .contact-methods {
                gap: 30px; /* Even more spacing on very small screens */
            }
            
            .contact-item {
                padding: 25px 15px;
                flex-direction: column;
                text-align: center;
                gap: 20px; /* Increased gap between icon and text */
            }
            
            .contact-details {
                width: 100%;
            }
        }
    </style>


    <section class="complaints-section" style="margin-top: 40px;">
        <!-- Promise Section -->
        <div class="promise-section">
            <div class="promise-image">
                <img decoding="async" src="/3306.jpg" alt="Customer Support Team">
            </div>
            <div class="promise-content">
                <h3><i class="fas fa-handshake"></i> Our Promise to You</h3>
                <p>We understand that sometimes things can go wrong. If you're unhappy with any aspect of our service, please let us know. We aim to resolve all complaints fairly, promptly, and professionally. Your satisfaction is our priority, and we value the opportunity to make things right.</p>
            </div>
        </div>

        <!-- How to Make a Complaint -->
        <div class="complaint-methods">
            <h3><i class="fas fa-comment-dots"></i> How to Make a Complaint</h3>
            <p>You can contact us in any of the following ways:</p>
            
            <div class="methods-list">
                <div class="method-item">
                    <div class="method-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div class="method-content">
                        <h4>Phone</h4>
                        <p>03331380001</p>
                    </div>
                </div>
                
                <div class="method-item">
                    <div class="method-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="method-content">
                        <h4>Email</h4>
                        <p>info@ggsutilities.com</p>
                    </div>
                </div>
                
                <div class="method-item">
                    <div class="method-icon">
                        <i class="fas fa-laptop"></i>
                    </div>
                    <div class="method-content">
                        <h4>Online Form</h4>
                        <p>Available on our website</p>
                    </div>
                </div>
                
                <div class="method-item">
                    <div class="method-icon">
                        <i class="fas fa-paper-plane"></i>
                    </div>
                    <div class="method-content">
                        <h4>Post</h4>
                        <p>Send to our office address</p>
                    </div>
                </div>
            </div>
            
            <div class="requirements">
                <h4>Please include the following details with your complaint:</h4>
                <ul>
                    <li><i class="fas fa-check-circle"></i> Your name and contact details</li>
                    <li><i class="fas fa-check-circle"></i> Your account number (if applicable)</li>
                    <li><i class="fas fa-check-circle"></i> A clear description of the issue</li>
                    <li><i class="fas fa-check-circle"></i> Any relevant documents or evidence</li>
                </ul>
            </div>
        </div>

        <!-- Complaints Process -->
        <div class="process-section">
            <h3><i class="fas fa-list-ol"></i> Our Complaints Process</h3>
            
            <div class="process-steps">
                <div class="step-card">
                    <div class="step-icon">
                        <i class="fas fa-receipt"></i>
                    </div>
                    <span class="step-number">1</span>
                    <h4>Acknowledgement</h4>
                    <p>We will acknowledge your complaint within 2 working days and provide you with a reference number.</p>
                </div>
                
                <div class="step-card">
                    <div class="step-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <span class="step-number">2</span>
                    <h4>Investigation</h4>
                    <p>A dedicated team member will thoroughly investigate your complaint and gather all relevant information.</p>
                </div>
                
                <div class="step-card">
                    <div class="step-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <span class="step-number">3</span>
                    <h4>Resolution</h4>
                    <p>We aim to resolve all complaints within 10 working days. If more time is needed, we'll keep you informed.</p>
                </div>
                
                <div class="step-card">
                    <div class="step-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <span class="step-number">4</span>
                    <h4>Outcome</h4>
                    <p>We may offer a sincere apology, explanation, remedial action, or compensation where appropriate.</p>
                </div>
            </div>
        </div>

        <!-- Escalation Section -->
        <div class="escalation-section">
            <h3><i class="fas fa-exclamation-circle"></i> Still Not Satisfied? Escalate to the Energy Ombudsman</h3>
            <p>If we haven't resolved your complaint within 8 weeks, or you're unhappy with our final response, you can escalate to the <strong>Energy Ombudsman</strong> — a free, independent service that can:</p>
            
            <ul style="list-style: disc; padding-left: 20px; color: #444; margin-bottom: 20px;">
                <li>Require us to review your complaint again</li>
                <li>Recommend compensation</li>
                <li>Ensure we respond to your concerns</li>
            </ul>
            
            <div class="ombudsman-contact">
                <h4>Contact the Ombudsman:</h4>
                
                <div class="contact-methods">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-globe"></i>
                        </div>
                        <div class="contact-details">
                            <strong>Website</strong>
                            <span>www.energyombudsman.org</span>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <strong>Phone</strong>
                            <span>0330 440 1624</span>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <strong>Email</strong>
                            <span>enquiry@energyombudsman.org</span>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <strong>Post</strong>
                            <span>Energy Ombudsman, P.O. Box 966 Warrington WA4 9DF</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Accessibility Section -->
        <div class="accessibility-section">
            <h3 style="color:#fff"><i class="fas fa-universal-access" style="color:#fff"></i> Accessibility</h3>
            <p>Need this information in another format (large print, braille, audio, or another language)? Please contact us — we'll provide it free of charge.</p>
        </div>
    </section>`;

  return (
    <div className="page-wrapper" style={{ paddingBottom: '80px', background: '#fff' }}>
       <PageBanner 
        title="Complaints Handling Procedure" 
        description="At Get Green Solutions Ltd (T/a GGS Utilities), we are committed to delivering excellent customer service. Your feedback helps us improve, whether it's compliments or concerns." 
        image="/manager-scanning-box-while-his-colleague-typing-laptop-1-scaled-qzo742mh0ypr34ktbetelixfdqfnhluqxrq46srzao.jpg" 
      />
       <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </div>
  );
}
