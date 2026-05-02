Scan every page of this website and for each page:

1. Identify the page URL, page type (homepage, job listing, 
   job detail, resume builder, blog, about, contact, etc.)
2. Check if a <title> tag exists — if missing or weak, rewrite it
3. Check if a <meta description> exists — rewrite for max CTR
4. Check for H1, H2, H3 tag hierarchy — fix if broken or missing
5. Identify missing alt text on all images — write descriptive alt text
6. Flag any duplicate content across pages
7. Check canonical tags — add if missing
8. Verify robots.txt and sitemap.xml are present and correct
9. Check page load speed signals (large images, render-blocking scripts)
10. Ensure all pages are mobile-friendly and responsive
For a job seeker website, inject the following high-value SEO keywords 
naturally into every relevant page. Do NOT keyword-stuff — integrate 
contextually and semantically:

PRIMARY KEYWORDS (High Volume):
- job search
- find jobs online
- jobs near me
- job openings 2025 / 2026
- apply for jobs
- job vacancies
- full time jobs
- part time jobs
- work from home jobs
- remote jobs
- fresher jobs
- entry level jobs
- government jobs
- private sector jobs

SECONDARY KEYWORDS (Long-tail, High Intent):
- how to find a job fast
- best job search websites in India
- upload resume and find job
- job alerts by email
- jobs for freshers in [city/state]
- walk-in interview jobs
- latest job notifications
- free job posting site
- top companies hiring now
- IT jobs / engineering jobs / finance jobs / healthcare jobs

LSI / SEMANTIC KEYWORDS:
- career opportunities
- employment portal
- hiring now
- job board
- placement services
- talent acquisition
- job application tips
- interview preparation
- resume builder
- professional profile
- salary expectations
- skill-based hiring
Apply the following SEO rules to each page type:

── HOMEPAGE ──
Title: "Find Your Dream Job | [Site Name] – Jobs for Freshers & Professionals"
Meta Description: "Search thousands of job openings across India. Apply to 
full-time, part-time, remote & government jobs. Upload your resume & get 
hired today on [Site Name]."
H1: "Search & Apply for Jobs Online – Start Your Career Today"
Add: Job category grid with keyword-rich anchor text links
Add: "Why job seekers trust us" section with keywords embedded

── JOB LISTINGS PAGE ──
Title: "[Job Category] Jobs – Latest Openings | [Site Name]"
Meta: "Browse [X]+ [Job Type] job openings. Filter by location, salary, 
experience. Apply instantly on [Site Name]."
H1: "Latest [Category] Job Vacancies – Updated Daily"
Add: Schema markup (JobPosting structured data)
Add: Breadcrumbs for navigation

── JOB DETAIL PAGE ──
Title: "[Job Title] at [Company] – [City] | [Site Name]"
Meta: "Apply for [Job Title] position at [Company Name] in [City]. 
[X] years experience required. Salary: [range]. Apply now!"
H1: "[Job Title] – [Company Name]"
Add: JobPosting Schema (title, company, salary, datePosted, 
     validThrough, jobLocation, employmentType)
Add: FAQ section: "How to apply for this job?" "What is the salary?"

── RESUME BUILDER PAGE ──
Title: "Free Resume Builder Online – Create Professional Resume | [Site Name]"
Meta: "Build a job-winning resume in minutes. Choose from 50+ templates. 
Download as PDF. Trusted by [X] job seekers."
H1: "Build a Professional Resume for Free"

── BLOG / CAREER TIPS PAGE ──
Title: "[Article Title] – Career Tips | [Site Name]"
Add: Long-form SEO articles targeting question keywords:
  - "How to write a resume for freshers"
  - "Top 10 interview tips for 2026"
  - "Best remote jobs for beginners"
  - "How to get a job with no experience"

── ABOUT PAGE ──
Title: "About Us – [Site Name] | Trusted Job Search Platform"
Meta: "Learn how [Site Name] connects job seekers with top employers 
across India. Helping professionals find jobs since [Year]."

── CONTACT PAGE ──
Title: "Contact Us – [Site Name] | Get Job Search Help"
Add: LocalBusiness Schema with address, phone, email
Add the following JSON-LD schema to appropriate pages:

1. JobPosting Schema — on every job detail page
2. BreadcrumbList Schema — on all listing pages
3. FAQPage Schema — on homepage and job pages
4. Organization Schema — on homepage and about page
5. LocalBusiness Schema — if location-specific
6. WebSite Schema with SearchAction — on homepage (enables Google Sitelinks Search)

Example JobPosting Schema to inject:
{
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "[Job Title]",
  "description": "[Job Description]",
  "datePosted": "[YYYY-MM-DD]",
  "validThrough": "[YYYY-MM-DD]",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "[Company Name]",
    "sameAs": "[Company Website]"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "[City]",
      "addressRegion": "[State]",
      "addressCountry": "IN"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 300000,
      "maxValue": 600000,
      "unitText": "YEAR"
    }
  }
}