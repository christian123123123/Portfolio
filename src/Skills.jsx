// Skills.jsx
import { useState } from 'react';
import './Skills.css';

const Skills = () => {
const [activeCategory, setActiveCategory] = useState('all');

const skills = {
gameDev: [
    { name: 'Unity', icon: '🎮', level: 4, projects: 3, tools: ['C#', 'Physics'] },
    { name: 'C++', icon: '⚙️', level: 5, projects: 4, tools: ['Algorithms', 'Memory'] },
    { name: 'Unreal', icon: '🎮', level: 4, projects: 2, tools: ['C++', 'Blueprints'] }
],
webDev: [
    { name: 'React', icon: '⚛️', level: 4, projects: 2, tools: ['Hooks', 'Context API'] },
    { name: 'Angular', icon: '🅰️', level: 5, projects: 3, tools: ['RxJS', 'Services'] }
],
core: [
    { name: 'DSA', icon: '📊', level: 4, projects: 10, tools: ['Sorting', 'Graphs'] },
    { name: 'OOP', icon: '🧩', level: 4, projects: 8, tools: ['Design Patterns'] }
]
};

return (
<div className="skills-arcade">
    <div className="category-selector">
    {['all', 'gameDev', 'webDev', 'core'].map(category => (
        <button 
        key={category}
        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
        onClick={() => setActiveCategory(category)}
        >
        {category === 'gameDev' ? '🎮 Game Dev' :
            category === 'webDev' ? '🌐 Web Dev' :
            category === 'core' ? '💻 Core CS' : 'ALL'}
        </button>
    ))}
    </div>

    <div className="skills-grid">
    {Object.entries(skills).map(([category, items]) => (
        (activeCategory === 'all' || activeCategory === category) && (
        items.map((skill, index) => (
            <div key={`${category}-${index}`} className="skill-capsule">
            <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.name}</h3>
                <div className="project-badge">{skill.projects}+ projects</div>
            </div>
            
            <div className="skill-body">
                <div className="level-indicator">
                {[...Array(5)].map((_, i) => (
                    <div 
                    key={i} 
                    className={`level-dot ${i < skill.level ? 'active' : ''}`}
                    ></div>
                ))}
                </div>
                
                <div className="tool-cloud">
                {skill.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                ))}
                </div>
            </div>
            
            <div className="skill-footer">
                <div className="experience-bar" style={{ '--progress': `${(skill.level/5)*100}%` }} />
            </div>
            </div>
        ))
        )
    ))}
    </div>
</div>
);
};

export default Skills;