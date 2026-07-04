import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Bot, CheckCircle2, Clock3, DollarSign, Filter, PlugZap, Search, ShieldCheck, Sparkles, Store, Workflow } from 'lucide-react';
import { automationApps, categories } from './data/automationApps.js';
import './styles.css';

function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedApp, setSelectedApp] = useState(automationApps[0]);

  const filteredApps = useMemo(() => {
    return automationApps.filter((app) => {
      const matchesCategory = category === 'All' || app.category === category;
      const haystack = `${app.name} ${app.category} ${app.audience} ${app.tagline} ${app.description} ${app.integrations.join(' ')}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const averagePrice = Math.round(automationApps.reduce((sum, app) => sum + app.price, 0) / automationApps.length);

  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="brand"><Store size={26} /> Automation App Store</div>
          <a className="navCta" href="#catalog">Browse automations</a>
        </nav>

        <div className="heroGrid">
          <div>
            <div className="eyebrow"><Sparkles size={18} /> Ready-to-install AI workflows</div>
            <h1>Sell useful AI automations like apps.</h1>
            <p className="heroText">
              A practical marketplace for small businesses that want automation without learning prompts, APIs, or complicated tools.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#catalog">Open the store <ArrowRight size={18} /></a>
              <a className="secondaryButton" href="#builder">How it works</a>
            </div>
            <div className="trustBar">
              <span><CheckCircle2 size={16} /> Starter templates included</span>
              <span><ShieldCheck size={16} /> Built for review-before-send workflows</span>
              <span><PlugZap size={16} /> Connector-ready design</span>
            </div>
          </div>

          <div className="heroCard">
            <div className="heroCardHeader">
              <Bot size={30} />
              <div>
                <strong>Featured automation</strong>
                <span>{selectedApp.status}</span>
              </div>
            </div>
            <h2>{selectedApp.name}</h2>
            <p>{selectedApp.description}</p>
            <div className="miniStats">
              <span><DollarSign size={16} /> ${selectedApp.price}</span>
              <span><Clock3 size={16} /> {selectedApp.setupTime}</span>
              <span><Workflow size={16} /> {selectedApp.difficulty}</span>
            </div>
            <button className="wideButton" onClick={() => document.getElementById('detail')?.scrollIntoView({ behavior: 'smooth' })}>
              View automation blueprint
            </button>
          </div>
        </div>
      </section>

      <section className="metrics">
        <div><strong>{automationApps.length}</strong><span>starter apps</span></div>
        <div><strong>{categories.length - 1}</strong><span>business categories</span></div>
        <div><strong>${averagePrice}</strong><span>average template price</span></div>
        <div><strong>0-code</strong><span>storefront MVP</span></div>
      </section>

      <section id="builder" className="section split">
        <div>
          <p className="sectionLabel">The business model</p>
          <h2>Customers buy an automation, then connect their tools.</h2>
          <p>
            Each app is a repeatable workflow package: intake form, prompt template, business rules, connector checklist, and installation instructions. The first version can sell templates. Later versions can connect directly to Gmail, Calendar, Sheets, Stripe, SMS, CRM systems, and website chat.
          </p>
        </div>
        <div className="steps">
          <div><span>1</span><strong>Pick an automation</strong><p>Business owner chooses a workflow for sales, finance, marketing, or operations.</p></div>
          <div><span>2</span><strong>Customize the setup</strong><p>They enter business name, tone, pricing rules, links, and approval preferences.</p></div>
          <div><span>3</span><strong>Install or export</strong><p>The store generates prompts, forms, sheets, and connector instructions.</p></div>
        </div>
      </section>

      <section id="catalog" className="section catalogSection">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">Automation catalog</p>
            <h2>Browse starter apps</h2>
          </div>
          <div className="filters">
            <label className="searchBox"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search apps, tools, or business type" /></label>
            <label className="selectBox"><Filter size={17} /><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
          </div>
        </div>

        <div className="catalogGrid">
          {filteredApps.map((app) => (
            <article className={`appCard ${selectedApp.id === app.id ? 'active' : ''}`} key={app.id} onClick={() => setSelectedApp(app)}>
              <div className="cardTop"><span>{app.category}</span><strong>${app.price}</strong></div>
              <h3>{app.name}</h3>
              <p>{app.tagline}</p>
              <div className="chipRow">{app.integrations.slice(0, 3).map((integration) => <span key={integration}>{integration}</span>)}</div>
              <button>Select app</button>
            </article>
          ))}
        </div>
      </section>

      <section id="detail" className="section detailPanel">
        <div>
          <p className="sectionLabel">Selected automation</p>
          <h2>{selectedApp.name}</h2>
          <p>{selectedApp.description}</p>
          <div className="detailStats">
            <span>Audience: <strong>{selectedApp.audience}</strong></span>
            <span>Setup: <strong>{selectedApp.setupTime}</strong></span>
            <span>Difficulty: <strong>{selectedApp.difficulty}</strong></span>
          </div>
        </div>
        <div className="blueprintGrid">
          <div className="blueprintBox">
            <h3>Outcomes</h3>
            <ul>{selectedApp.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="blueprintBox">
            <h3>Install checklist</h3>
            <ol>{selectedApp.installSteps.map((item) => <li key={item}>{item}</li>)}</ol>
          </div>
          <div className="blueprintBox promptBox">
            <h3>Prompt template</h3>
            <pre>{selectedApp.promptTemplate}</pre>
          </div>
        </div>
      </section>

      <section className="section ctaPanel">
        <h2>Next build step: turn templates into working automations.</h2>
        <p>
          The storefront is ready for adding checkout, user accounts, saved installs, and connector-backed automation runners. Start by making one automation fully functional, then duplicate the pattern.
        </p>
        <a className="primaryButton" href="https://github.com/btinder1976/AI-Automation-App-Store">View repository <ArrowRight size={18} /></a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
