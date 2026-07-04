# AI Automation App Store

A marketplace-style website for selling practical AI automation templates to small businesses, creators, job seekers, and self-employed workers.

## What this MVP includes

- React/Vite storefront
- Searchable automation catalog
- Category filtering
- Featured automation panel
- Automation detail blueprints
- Prompt templates for each automation
- Setup checklist for each automation
- Netlify-ready static deployment

## Starter automation apps included

1. Missed Call Follow-Up
2. Cleaning Estimate Generator
3. Review Request Engine
4. Invoice Reminder Assistant
5. Job Application Tracker
6. Social Content Repurposer
7. Small Business AI Receptionist
8. Receipt Expense Logger

## How to run locally

```bash
npm install
npm run dev
```

## How to build

```bash
npm run build
```

## Deploy on Netlify

Use these settings:

- Build command: `npm run build`
- Publish directory: `dist`

## What counts as an "app" in this store?

Each automation app should eventually contain:

- A business problem it solves
- A target customer type
- A price or subscription tier
- Required integrations
- Prompt template
- Setup steps
- Output examples
- Safety/approval rules
- Optional connector workflow

The current MVP sells the template/blueprint layer. The next version can add user accounts, checkout, saved installs, and real connector-backed workflow runners.

## Recommended next features

### Phase 2: Monetization

- Stripe checkout
- Free vs paid template access
- Customer account dashboard
- Download/export automation kit

### Phase 3: Real automation runner

- Gmail connector
- Google Calendar connector
- Google Sheets connector
- SMS provider such as Twilio
- Stripe/QuickBooks integrations
- Admin approval queue

### Phase 4: Creator marketplace

- Let other builders submit automation apps
- Revenue split
- Ratings/reviews
- Featured apps
- Business category bundles

## Best first real app to build

Start with **Cleaning Estimate Generator** because it directly matches a real small-business use case and can be implemented with simple inputs:

- Name
- Phone/email
- Address
- Bedrooms
- Bathrooms
- Condition
- Frequency
- Add-ons
- Preferred date

Then generate:

- Customer quote
- Internal job notes
- Follow-up email
- Google Sheet entry
