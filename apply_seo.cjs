const fs = require('fs');
const path = require('path');

const seoData = {
    "Home.jsx": ["GGS Utilities | Reliable Energy & Water Solutions", "Discover affordable business energy, gas, water, and telecom solutions with GGS Utilities. We provide seamless connections and transparent pricing."],
    "AboutUs.jsx": ["About Us | GGS Utilities - Your Trusted Energy Partner", "Learn about GGS Utilities, our mission, and our commitment to providing UK businesses with reliable, eco-friendly energy and water solutions."],
    "Contact.jsx": ["Contact GGS Utilities | Get Your Free Energy Quote", "Get in touch with GGS Utilities today for business energy, water, and telecom solutions. Contact our expert team for a free, no-obligation quote."],
    "BusinessEnergy.jsx": ["Business Energy Solutions | Electricity & Gas | GGS Utilities", "Explore comprehensive business energy solutions. GGS Utilities offers tailored electricity and gas plans to reduce costs and boost your efficiency."],
    "GreenEnergy.jsx": ["Green Energy Solutions | Sustainable Power | GGS Utilities", "Switch to sustainable power with our green energy solutions. Reduce your carbon footprint and access affordable, renewable energy for your business."],
    "BusinessElectricity.jsx": ["Business Electricity Connections | GGS Utilities", "Secure reliable business electricity with GGS Utilities. We offer tailored plans, fast installations, and competitive rates for all your power needs."],
    "BusinessGas.jsx": ["Business Gas Solutions | Reliable Supply | GGS Utilities", "Discover cost-effective business gas solutions. We provide seamless installations, expert guidance, and scalable plans for your commercial needs."],
    "WaterAndWaste.jsx": ["Commercial Water & Waste Management | GGS Utilities", "Optimize your business with our commercial water and waste management services. Enjoy cost savings, efficiency, and eco-friendly waste solutions."],
    "PaymentSolutions.jsx": ["Secure Business Payment Solutions | GGS Utilities", "Streamline your transactions with GGS Utilities' secure payment solutions. We offer flexible, integrated systems to improve your business cash flow."],
    "NewConnectionsElectricity.jsx": ["New Electricity Connections for Business | GGS Utilities", "Set up new business electricity connections quickly. GGS Utilities provides end-to-end support, effortless installation, and scalable energy plans."],
    "NewConnectionsGas.jsx": ["New Business Gas Connections | Fast Setup | GGS Utilities", "Need a new business gas connection? GGS Utilities offers streamlined setup, reliable supply, and tailored gas plans for your operational needs."],
    "NewConnectionsWater.jsx": ["New Commercial Water Connections | GGS Utilities", "Establish reliable commercial water connections with GGS Utilities. We handle the setup process efficiently, ensuring uninterrupted water supply."],
    "Blog.jsx": ["Energy & Utilities Blog | Insights & News | GGS Utilities", "Read the latest news, insights, and expert tips on business energy, sustainability, and utility management on the GGS Utilities blog."],
    "BlogPost.jsx": ["Blog Article | GGS Utilities", "Read our latest insights and expert articles on business energy, water solutions, and utility management from GGS Utilities."]
};

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir);

files.forEach(filename => {
    if (!seoData[filename]) return;

    const filepath = path.join(pagesDir, filename);
    let content = fs.readFileSync(filepath, 'utf8');

    if (content.includes('useSEO(')) return;

    // 1. Add import
    const importRegex = /^import .*?;?\n/m;
    const matchImport = content.match(importRegex);
    if (matchImport) {
        const idx = matchImport.index;
        content = content.slice(0, idx) + "import useSEO from '../hooks/useSEO';\n" + content.slice(idx);
    } else {
        content = "import useSEO from '../hooks/useSEO';\n" + content;
    }

    // 2. Add useSEO call
    const exportRegex = /export default function \w+\(.*?\)\s*\{/;
    const matchExport = content.match(exportRegex);
    
    if (matchExport) {
        let [title, desc] = seoData[filename];
        title = title.replace(/"/g, '\\"');
        desc = desc.replace(/"/g, '\\"');
        
        const injection = `\n  useSEO("${title}", "${desc}");`;
        const idx = matchExport.index + matchExport[0].length;
        content = content.slice(0, idx) + injection + content.slice(idx);
        
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated ${filename}`);
    } else {
        console.log(`Could not find export default function in ${filename}`);
    }
});
