---
title: The tools and tech stack we use to run our startup
authors: manuel
---

**I love reading [posts](https://jake.nyc/words/tools-and-services-i-use-to-run-my-saas/) [like](https://baremetrics.com/blog/tools-and-services-we-use-to-run-our-startup) [these](https://panelbear.com/blog/tech-stack/), in which startups talk about the tech and tools they chose to run their businesses. Even if you don't find something new to use for yourself, it's always interesting to learn about the thought and reasoning that goes into the choices small startups make.**

<!--truncate-->

So let's look at what we use to run [Uplink](https://uplink.tech/), our network for IT freelancers! We're a [team of two](https://uplink.tech/ueber-uns#team) and I am the only engineer, i.e. I've written every line of code and made most of the technical choices. It's quite a special situation with lots of advantages and some disadvantages. 😁 Probably a good topic for another post...

## Tech

Uplink is at its core a web app with login areas for different user groups. It's a [majestic monolith](https://m.signalvnoise.com/the-majestic-monolith/) written mostly in **Ruby on Rails** and of course some **JavaScript**. Rails has been a great choice for us, since it has evolved and improved over the years, and allowed us to use the extensive (and growing) pool of Ruby gems (plugins) to implement common functionality.
_Cost: free_

We use **Redis** for caching, rate limiting, and similar things. It's a fantastic piece of software, and I'm amazed that it has succeeded in keeping its simple API and data structures over the years.
_Cost: free_

**Sidekiq** is our tool of choice for background processing (sending emails & Slack messages, calls to external APIs, etc.). Like Redis (which Sidekiq uses internally), it has become such an integral part of our stack that I wouldn't know what to do without it.
_Cost: free_

**EnvKey** lets us conveniently manage the secrets (credentials, API keys, etc.) that our app uses. It costs $20 per month if you sign up now, but I've been an early beta user and they never converted my account to a paid one. 🤷‍♂️
_Cost: free_

## Hosting

**DigitalOcean** is our main host and we run our web app, blog (Ghost), cache (Redis), and background queue (Sidekiq) on one droplets (VMs) each.
_Cost: $30/month_

**AWS** hosts our database (RDS Postgres).
_Cost: $30/month_

## Email

**Google Workspace** (formerly G Suite) is what we use for email, docs, contacts, and calendars. It has served us well and the API allows us to sync contacts with all clients and leads in our main app.
_Cost: $18.50/month_

We use **Mailgun** as well for certain kinds of outgoing mails. We're still on the old free plan.
_Cost: free_

We used to use **Mailchimp** for newsletters but were never really happy with the writing experience and the look of the emails. Recently, we switched to using the newsletter functionality of **Ghost**, which was already running our blog. We tried out **Mailjet** as an alternative to Mailchimp before switching to Ghost. We liked it better than Mailchimp but it was still too cumbersome to use.
_Cost: free_

## Communication

**Slack** powers all of our communication internally and with our freelancer community. We actually run two separate workspaces, one for our community (currently ca. 1.900 members) and one for our team. The community workspace is free - we'd be happy to pay for it, e.g. to remove the limit of only the last 10k messages being accessible, but due to Slack's pricing model it's either free or 6,25€ per active member per month, which would add up to > 1.000€ per month - not really practical for us. The team workspace is a paid one, though, and we use the great [Slack Connect](https://slack.com/connect) feature with some of our partners.
_Cost: $12.50/month_

We use **Notion** as our internal wiki and note-taking tool. It works great and we're very happy with it. We also use their [public pages](https://www.notion.so/help/guides/publish-notion-pages-to-the-web) functionality sometimes to share docs with our members or partners.
_Cost: $16/month_

**Docusaurus** is the new home of our [Knowledge Base](https://uplink.tech/knowledge-base/), which ran on **Gitbook** until a few months ago. We weren't really happy with the Gitbook interface and writing experience, and it does not have internationalization support. We like to have all our content in German and English, so we looked for an alternative. Docusaurus is not a hosted solution but basically a static site generator, but it has internationalization support and the resulting static site can be hosted anywhere. We opted for **GitHub Pages**, since all our code is already hosted on **GitHub**, and automatic deployment via [GitHub Actions](https://github.com/uplinkhq/knowledge-base/blob/main/.github/workflows/deploy.yml) was trivial to implement.
_Cost: free_

**Trello** is our choice for our internal roadmap and planning/idea board. It's super simple and flexible.
_Cost: free_

**Ghost** runs our [blog](https://uplink.tech/blog/) and, as mentioned, also our member "newsletter" after the change from Mailchimp. We sync all our members from our main Rails app to Ghost (coincidentally, also called "members" there) and instead of a newsletter, we create a post that is accessible to members only, and is mailed out automatically to all members who subscribe to the newsletter. It sounds complicated but works beautifully so far! 😄
_Cost: free_

## Banking & invoicing

Penta is a FinTech startup, also from Berlin, and we switched our main banking account to them a few years ago, and haven't regretted it. They have a great website and app, [release new features on a regular basis](https://updates.getpenta.com/) and have an affordable pricing.
_Update Dec 2022: Penta has been bought by Qonto and will disappear as a separate brand sometime in 2023._
Cost: $10.50/month

**Debitoor** is our invoicing tool. We use it to generate invoices and track payments from Penta. It has had a few glitches over the years, e.g. payments are still imported from Penta but stopped syncing to the invoices a few months ago, and support was like 🤷, so we can't fully recommend it anymore. Once their support messed up so bad that they gave us lifetime access for free, though, so for now we'll stay with them. 😄
_Cost: free_

## Other tools

**Super.so** is a cool little tool that sits in front of a public Notion page and makes it more usable as a proper website (custom URL, caching etc.). We use it for our docs for recruiters.
_Cost: $4/month_

**1Password** is our go-to tool for password management. It's the best one, in my opinion, and we happily pay for the team plan.
_Cost: $8/month_

**Calendly** is our scheduling tool. It's great, everybody knows it, and the free version works well for us.
_Cost: free_

**Zapier** takes care of publishing new blog posts on Facebook and Twitter for us.
_Cost: free_

**Sipgate** is a VoIP provider and gives us a free local Berlin phone number, which we use in our imprint (and everywhere else where we have to provide a phone number but don't want to use our real ones). We recorded a custom mailbox message and get email notifications of new calls, which is all we need.
_Cost: free_

**GitHub** is the home for all our code. We use **GitHub Actions** to automate tests and deployments, wherever we can.
_Cost: free_

We use **Plausible** for analytics. It's a great, privacy-friendly alternative to Google Analytics and gives us all the stats we need. One of the services I happily pay for (and I'm not sure I'd use if it was free).
_Cost: $6/month_

**Crowdcast** is the tool we use for [our webinars](https://www.crowdcast.io/uplink). It has neat features like being able to ask and vote on questions during the webinar. It's not super cheap, considering that we don't use it that often, but we haven't found a better/cheaper alternative, so we'll stay with them for now.
_Cost: $20/month_

**Headway** is a nice little tool we use to show a [changelog to our recruiting partners](https://headwayapp.co/uplink-recruiting-partners-changelog) as an in-app widget. We're considering to switch to a different solution that has an idea board and public roadmap implemented as well, though.
_Cost: free_

**Chatwoot** is what we use for our chat widget on our website and in the member area. We switched only last week from Drift, which performed too many tracking calls for our taste and started calling itself a "Revenue Acceleration Platform", whereas we just needed a small and fast chat widget.
_Cost: free_

## Total costs

DigitalOcean: $30/month
AWS: $30/month
Google Workspace: $18.50/month
Slack: $12.50/month
Notion: $16/month
Penta: $10.50/month
Super.so: $4/month
1Password: $8/month
Plausible: $6/month
Crowdcast: $20/month
------------------------------
**Total: $155.50/month**

So there you have it - you can run a business using all of these great services, for about $150/month. Of course, we have some more costs (e.g. our office, tax advisor, administrative costs for the company etc.) but it's fascinating to realize how cheap and easy it has gotten in the last decades to set up and run a "professional" business with all these tools. We really are standing on the shoulders of giants! 😁

---

Cover photo by [Will Porada](https://unsplash.com/@will0629?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/lego?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
