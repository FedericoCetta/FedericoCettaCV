import React from 'react';
import ReactDOM from 'react-dom'
import { TranslatorProvider } from "react-translate";
import Content from './Content.js';
import './cv.css';
import './bootstrap.css';
import './social-network.css';
import logo from './img/banner8.png';
import perfil from './img/perfil.jpg';
import phone from './img/phone.png';
import email from './img/email.png';
import workicon from './img/iconwork.png';
import iconSchool from './img/iconSchool.png';
import iconPerson from './img/iconPerson.png';
import iconSkill from './img/iconSkill.png';
import iconLanguage from './img/inconLanguage.png';
import iconContact from './img/iconContact.png';
import iconPdf from './img/iconPdf.png';
import iconGithub from './img/iconGithub.png';
import iconLinkedin from './img/iconLinkedin.png';
import IconHobbies from './img/IconHobbies.png';
import iconTwiter from './img/iconTwiter.png';
import pdf from './pdf/FedericoCetta.pdf';



class Curriculum extends React.Component{
    
    _getLayout(lang){
    
        return (<TranslatorProvider translations={require('./jsons/'+lang+'.json')}>
			<div className="container">
			<div className="row">
				<div className="banner-cv-container">
				<img className="banner-image" src={logo} alt="banner" />
					<div className="picture-title-container">
					
						<div className="header-title-name-container">					
						<label className="title-header1">.Net Developer</label>
                        <label className="title-header2">Federico Cetta</label>
						</div>
					</div>
				</div>
				<div className="col-sm-5 col-12">
                <img className="profile-image" src={perfil} alt="perfil" />
                <div className="sub-section">
                    <div className="sub-section-container">
                        <label className="titles"><img className="titles-icons" src={iconPerson} alt="" /><Content  name="profile"/></label>
                        <div className="line"></div>
                        <Content class="profile-content" name="profile-line1"/>
                        <Content  class="profile-content" name="profile-line2"/>
                        <Content  class="profile-content" name="profile-line3"/>
                        <Content  class="profile-content" name="profile-line4"/>
						<Content  class="profile-content" name="profile-line5"/>
                    </div>                    
                </div>
                <div className="sub-section">
                    <div className="sub-section-container">
                        <label className="titles"><img className="titles-icons" src={iconContact} alt="" /><Content  name="contact"/></label>
                        <div className="line"></div>
                        <div className="icon-container"><img className="titles-icons" src={email} alt="" /><span>federico.cetta1812@gmail.com</span></div>
                        <div className="icon-container"><img className="titles-icons" src={phone} alt="" /><span>+598 94 729 380</span></div>
                    </div>                    
                </div>
                <div className="sub-section">
                    <div className="sub-section-container">
                        <label className="titles"><img className="titles-icons" src={iconLanguage} alt="" /><Content   name="language"/></label>
                        <div className="line"></div>
                        <div className="">
                        <Content  class="languageTitle" name="language-region"/><Content  class="languageLevel" name="language-level"/>
                        </div>
                    </div>                    
                </div>
                <div className="sub-section">
                    <div className="sub-section-container">
                        <div>
							<label className="titles"><img className="titles-icons" src={iconSkill} alt="" /><Content   name="conocimiento"/></label>
                            <div className="line"></div>
						</div>
						<div className="skill">C#</div>  
                        <div className="skill">ASP.NET MVC</div>
                        <div className="skill">SCRUM</div>
                        <div className="skill">Git</div>
                        <div className="skill">SQL</div>
                        <div className="skill">SQL-Server</div>
						<div className="skill">N-Hibernate</div>
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">ReactJS Beginner</div>
                        <div className="skill">JQuery</div>
                        <div className="skill">Entity Framework</div>
						<div className="skill">RPA UiPath</div>
                    </div>                    
                </div>
            </div>
			<div className="col-sm-7 col-12 experience-container">
                <div className="sub-section">
                    <div className="sub-section-container">
                        <label className="titles"> <img className="titles-icons" src={workicon} alt="" /><Content name="experience"/></label>
                        <div className="line"></div>
                        <div className="experience-sub-container">
                            <Content  class="job-name" name="experience-name0"/>
                            <Content  class="job-date-company" name="experience-company0"/>
                            <ul className="ul-job-description">
                                <li className="job-description">  <Content  class="" name="experience-description0"/></li>
                                <li className="job-description">  <Content  class="" name="experience-description0.1"/></li>
                            </ul>
                        </div>
                        <div className="experience-sub-container">
                        <Content  class="job-name" name="experience-name1"/>
                        <Content  class="job-date-company" name="experience-company1"/>
                            <ul className="ul-job-description">
                                <li className="job-description">  <Content  class="" name="experience-description1"/></li>
                            </ul>
                        </div>         
                    </div>                    
                </div>

                <div className="sub-section">
                    <div className="sub-section-container">
                   
                    <label className="titles"><img className="titles-icons" src={iconSchool} alt="" /><Content  class="" name="Education"/></label>
                        <div className="line"></div>
                        <div className="experience-sub-container">
                            <Content  class="job-name" name="formation-name0"/>
                            <Content  class="job-date-company" name="formation-institute0"/>
                            <ul className="ul-job-description">
                                <li className="job-description">  <Content  class="" name="formation-description0"/></li>
                            </ul>
                        </div>
                        <div className="experience-sub-container">
                        <Content  class="job-name" name="formation-name1"/>
                            <Content  class="job-date-company" name="formation-institute1"/>
                            <ul className="ul-job-description">
                            <li className="job-description">  <Content  class="" name="formation-description1"/></li>
                            </ul>
                        </div>            
                    </div>                    
                </div>

				<div className="sub-section">
                    <div className="sub-section-container">
                        <label className="titles"><img className="titles-icons" src={IconHobbies} alt="" /><Content  class="" name="hobbies"/></label>
                        <div className="line"></div>
                        <div className="experience-sub-container">
                        <Content  class="job-name" name="hobbies-title0"/>
                        <Content  class="job-date-company" name="hobbies-zone0"/>
                            <ul className="ul-job-description">
                            <li className="job-description">  <Content  class="" name="hobbies-description0"/></li>
                            </ul>
                        </div>
                        <div className="experience-sub-container">
                        <Content  class="job-name" name="hobbies-title1"/>
                        <Content  class="job-date-company" name="hobbies-zone1"/>
                            <ul className="ul-job-description">
                            </ul>
                        </div>                                      
                    </div>                    
                </div>
            </div>
			</div>
			</div>
            <div className="icon-bar">
        
        <a href="https://www.linkedin.com/in/federico-cetta-06314a138/"  target="_blank" className=""><i><img className="titles-icons" src={iconLinkedin} alt="" /></i></a>
        <a href="https://twitter.com/FedericoCetta12" target="_blank" className=""><i><img className="titles-icons" src={iconTwiter} alt="" /></i></a> 
        <a href="https://github.com/FedericoCetta/FedericoCettaCV"  target="_blank" className=""><i><img className="titles-icons" src={iconGithub} alt="" /></i></a> 
        <a href={pdf} download="FedericoCetta.pdf" target="_blank" className=""><i><img className="titles-icons" src={iconPdf} alt="" /></i></a>
       
    </div>
		</TranslatorProvider>)
	}

	render(){
		let url  = window.location.href;
		if(url.search('/es') !== -1){
			return this._getLayout('es')
		}else{
			return this._getLayout('en');
		}
	}
}

export default Curriculum;