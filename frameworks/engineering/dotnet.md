---
path: "/engineering/dotnet"
title: "🛠️ .Net Engineering Framework"
sidebarTitle: "🛠️ .Net"
sidebarGroup: "engineering"
yaml: true
levels: 6
homepage: true
topics:
  - name: "teamwork"
    title:
    content:
      - level: 1
        criteria:
      - level: 2
        criteria:
      - level: 3
        criteria:
      - level: 4
        criteria:
      - level: 5
        criteria:
      - level: 6
        criteria:
  - name: "impact"
    title:
    content:
      - level: 1
        criteria:
      - level: 2
        criteria:
      - level: 3
        criteria:
      - level: 4
        criteria:
      - level: 5
        criteria:
      - level: 6
        criteria:
  - name: "mastery"
    title: "🛠️ Mastery"
    content:
      - level: 1
        criteria:
          - "Learns to write correct Go code, following guidance and training materials"
          - "Fixes simple bugs"
      - level: 2
        criteria:
          - "Designs simple database tables"
          - "Implements asynchronous messaging between services"
          - "Deploys services to staging and production"
          - "Handles simple error cases in RPC handlers and message consumers"
          - "Fixes bugs involving a number of services and can investigate production issues"
          - "Uses appropriate algorithms and data structures to solve problems"
          - "Writes automated unit and acceptance tests"
        exampleCriteria:
          - criteria: "Implements simple RPC handlers"
            examples:
              - "Basic CRUD handlers"
              - "Internal/external API proxies"
          - criteria: "Writes correct Go code following accepted best practices"
            examples:
              - "Follows our Coding Conventions & Best Practices, uses language-level primitives correctly"
      - level: 3
        criteria:
          - "Uses appropriate design patterns"
          - "Designs new schemas comprising multiple tables"
          - "Implements complex asynchronous messaging flows"
          - "Co-ordinates complex deployments and database migrations"
          - "Implements distributed systems consisting of multiple interacting services"
          - "Produces technical designs that include a consideration of scalability"
          - "Handles complex error cases in RPC handlers and message consumers"
          - "Debugs production issues"
          - "Considers metrics when building a new system"
        exampleCriteria:
          - criteria: "Writes idiomatic Go code"
            examples:
              - "Follows the guidelines in Effective Go (https://golang.org/doc/effective_go.html), avoids using patterns that are idiomatic in other languages"
          - criteria: "Mitigates race conditions and partial failure states in distributed systems"
            examples:
              - "Uses locking where appropriate, writes code that is “self-healing” when dealing with distributed failure (e.g. data needs to be written in two or more services)"
          - criteria: "Implements complex RPC handlers"
            examples:
              - "Implements complex business logic, orchestrates multi-stage processes, deals with idempotency or distributed data sources"
          - criteria: "Proactively considers security implications of their work"    
            examples:
              - "Appropriately ties down internal access to resources they're working with (e.g. RPC blacklisting, BigQuery permissions)"
              - "Evaluates security risks when contributing to proposals"
              - "Highlights potential security issues when raising and reviewing pull requests - e.g. adding rate limiting in an API, or leaving a code comment to explain why we choose not to"
              - "\"There's a risk here of X, Y but given Z, I think this is OK\""
              - "Loops in Security when their squad is unsure about something by posting in #security-requests"
      - level: 4
        criteria:
          - "Writes code that serves as a definitive example for new engineers"
          - "Leads the refactoring (de-cruftification) of complex systems"
          - "Debugs complex production issues at speed"
          - "Identifies and fixes security vulnerabilities"
          - "Identifies and fixes performance bottlenecks in individual services"
          - "Explains all aspects of the platform to new engineers"
          - "Includes actionable dashboarding as part of a new system"
        exampleCriteria:
          - criteria: "Implements services or libraries that require a deep level of domain knowledge"
            examples:
              - "Mastercard message parsing"
              - "Credit decisioning"
              - "CASS scheduling"
              - "Google Pay"
          - criteria: "Makes contributions to library code or core services"
            examples:
              - "Bug fixes, small improvements; things that don’t result in a major change in the public API"
          - criteria: "Builds systems that scale reliably without intervention"
            examples:
              - "Services can withstand a year’s worth of growth in load/user base without needing first aid"
      - level: 5
        criteria:
          - "Builds systems that serve as definitive examples for new engineers"
          - "Makes major contributions to library code or core services"
          - "Contributes to external technologies or libraries that we depend on"
          - "Develops clear technical solutions from ambiguous requirements"
          - "Uncovers and fixes tricky bugs that have previously evaded detection"
          - "Implements security improvements that impact multiple services"
          - "Implements performance improvements that impact multiple services"
          - "Demonstrates a deep level of knowledge in a specific area"
          - "Serves as a technical authority on a technology or an area of the codebase"
          - "Creates dashboards that broadly impact all engineers"
        exampleCriteria:
          - criteria: "Produces clear technical designs for large complex projects"
            examples:
              - "Outbound and Inbound MasterCard clearing proposals"
      - level: 6
        criteria:
          - "Makes major contributions to technologies and libraries that we depend on"
          - "Makes improvements to the stability, performance or security of the entire platform"
          - "Serves as a technical authority in the wider engineering community"
---
### About our engineering progression frameworks
The engineering progression framework is a tool that helps engineers and managers:
- make development and career plans
- talk about what we’re looking for from engineers in a consistent way
- set a fair level of compensation.

The framework is a compass, not a GPS.

It's meant to be helpful. It's not meant to be a rating system for humans, free from edge cases.

### How does it work?
The framework covers all the things we’re looking for from engineers at Monzo. We’re interested in these five elements:
- Mastery - Your Monzo knowledge and technical capability
- Impact - The size, scope and value of what you deliver
- Influence - How you change the world around you for the better
- Comms & Feedback - How you interact with others
- Leadership - How people around you become better and more impactful

We sort them into six levels, and we try to give specific examples of behaviours we expect for each. Each of those levels has a fairly wide salary range associated with it, and within each level you can progress in sub-levels, labelled A–E. So even if you’re at level 3 for a couple of years, you’ll still be able to see that you’re moving forward. Basically, the more behaviours you show from your level, the more you’ll progress.

Your manager will work with you on this. None of it will happen mysteriously behind closed doors. You’ll agree what level of progression you’re going for and what you need to improve on with your manager. It should be clear how you’re doing relative to that at all times.

### Things to keep in mind
- There are many different ways to progress and be valuable to Monzo as you grow, including deep technical knowledge and ability, technical leadership and people management. All are equally valuable paths in Monzo's engineering team.
- The framework represents a career’s worth of progression, people shouldn’t expect to fly up it in 18 months!
- Engineering progression isn’t an exact science and there will always be some ambiguity.
- This isn’t a checklist – it’s possible to progress up a level without showing all the behaviours in that level.
- There will be levels on top (eg ‘Inventor of Android’ or ‘Author of Go’), but we won’t add them until we need them.
- You can find some more information in these links. If that doesn't answer most of your questions, please ask your manager.

### Give us your feedback!
This is only the first version of our framework and we really want your feedback.

We're particularly keen to add as many examples to the behaviours as possible, to further clarify them.
