// Contractor Finance Fundamentals - Complete Course Content

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  transcript: string;
  keyPoints: string[];
}

export interface KnowledgeCheck {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  duration: string;
  description: string;
  lessons: Lesson[];
  knowledgeCheck: KnowledgeCheck[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  level: string;
  modules: Module[];
  passingScore: number;
}

export const contractorFinanceFundamentals: Course = {
  id: "contractor-finance-fundamentals",
  title: "Contractor Finance Fundamentals",
  slug: "contractor-finance-fundamentals",
  description: "Master the basics of contractor accounting: P&L, balance sheets, job costing, and the metrics that actually matter for construction businesses.",
  duration: "2 hours",
  level: "Beginner",
  passingScore: 80,
  modules: [
    {
      id: "module-1",
      number: 1,
      title: "Understanding Your Financial Statements",
      duration: "25 min",
      description: "Learn to read and understand the three core financial statements that every contractor needs to master.",
      lessons: [
        {
          id: "m1-l1",
          title: "The Profit & Loss Statement: What It Actually Tells You",
          duration: "7 min",
          transcript: `Welcome to the first lesson of Contractor Finance Fundamentals. I'm going to teach you how to read a Profit and Loss statement, or P&L, in a way that actually helps you run your business.

Most contractors look at their P&L once a year when their accountant hands it to them at tax time. That's a mistake. Your P&L is telling you a story about your business every single month—you just need to learn how to read it.

The P&L has three main sections: Revenue, Cost of Goods Sold, and Operating Expenses. Let's break each one down.

Revenue is the money you've earned from jobs. Not the money in your bank account—that's different. Revenue is what you've invoiced and are owed. If you completed a $50,000 bathroom remodel and sent the invoice, that's $50,000 in revenue, even if the customer hasn't paid yet.

Cost of Goods Sold, or COGS, is everything that went directly into those jobs. For a contractor, this includes labor costs for your crews, materials you purchased for the job, subcontractor payments, equipment rental for that specific job, and permits. Basically, if the cost wouldn't exist without that specific job, it's COGS.

When you subtract COGS from Revenue, you get Gross Profit. This is the single most important number on your P&L. It tells you how much money you actually made from doing the work, before paying for your office, your truck, or yourself.

Below Gross Profit, you have Operating Expenses. These are the costs of running your business that aren't tied to specific jobs: your office rent, your cell phone, accounting fees, insurance, marketing, and your own salary. These costs exist whether you do one job or twenty.

Subtract Operating Expenses from Gross Profit, and you get Net Income—your actual profit.

Here's the key insight: most contractors focus on the bottom line, Net Income. But the real action is in Gross Profit. If your Gross Profit percentage is too low, no amount of cost-cutting on operating expenses will save you. You're simply not charging enough for your work.

A healthy contractor should have a Gross Profit margin of 30 to 40 percent. That means for every dollar of revenue, 30 to 40 cents is left after paying for the direct costs of the job. If your Gross Profit margin is below 25 percent, you have a pricing problem, and we'll address that later in this course.

In the next lesson, we'll look at the Balance Sheet and how it connects to your P&L.`,
          keyPoints: [
            "Revenue is money earned, not money received",
            "COGS includes all direct job costs: labor, materials, subs, equipment",
            "Gross Profit = Revenue minus COGS (aim for 30-40%)",
            "Operating Expenses are overhead costs not tied to specific jobs",
            "Net Income = Gross Profit minus Operating Expenses"
          ]
        },
        {
          id: "m1-l2",
          title: "Balance Sheet Basics for Contractors",
          duration: "6 min",
          transcript: `The Balance Sheet is the financial statement most contractors ignore. That's understandable—it looks confusing. But once you understand it, you'll see it's actually simpler than the P&L, and it tells you something the P&L can't: how healthy your business really is.

The Balance Sheet has three sections: Assets, Liabilities, and Equity. Here's the magic formula: Assets equals Liabilities plus Equity. Always. That's why it's called a Balance Sheet—it always balances.

Let's start with Assets. These are things your business owns or is owed. For contractors, the big ones are: Cash in your bank accounts, Accounts Receivable (money customers owe you), Inventory (materials you've bought but haven't used), Equipment and vehicles, and sometimes Work in Progress for jobs you've started but not billed.

Liabilities are what you owe others. This includes Accounts Payable (bills you haven't paid yet), Credit card balances, Vehicle loans, Equipment loans, and any Lines of Credit you've drawn on.

Equity is what's left over—the owner's stake in the business. It includes money you've invested in the business plus accumulated profits you haven't taken out.

Here's why this matters for contractors: The Balance Sheet shows you your working capital position. Working capital is Current Assets minus Current Liabilities. Current means within the next 12 months.

If you have $50,000 in the bank and $30,000 in receivables, that's $80,000 in current assets. If you owe $25,000 to suppliers and have $15,000 on your credit line, that's $40,000 in current liabilities. Your working capital is $40,000.

That $40,000 is what you have available to fund new jobs, cover slow periods, and handle unexpected expenses. If this number is negative, you're technically insolvent—you owe more than you have.

The ideal working capital for a contractor is 10 to 15 percent of your annual revenue. If you do $1 million in revenue, you want $100,000 to $150,000 in working capital.

Most contractor failures happen not because of low profits, but because of negative working capital. They can't fund the next job, even if it's profitable.

In the next lesson, we'll look at the Cash Flow Statement—the report that connects the P&L and Balance Sheet and shows you why profitable companies go broke.`,
          keyPoints: [
            "Assets = Liabilities + Equity (always balances)",
            "Key contractor assets: Cash, Receivables, Equipment, WIP",
            "Key contractor liabilities: Payables, Loans, Credit Lines",
            "Working Capital = Current Assets minus Current Liabilities",
            "Target working capital: 10-15% of annual revenue"
          ]
        },
        {
          id: "m1-l3",
          title: "Cash Flow Statement: The Most Important Report",
          duration: "6 min",
          transcript: `Here's a truth that trips up most contractors: profit and cash are not the same thing. You can be profitable and broke at the same time. The Cash Flow Statement explains why.

The Cash Flow Statement tracks actual cash moving in and out of your business. It has three sections: Operating Activities, Investing Activities, and Financing Activities.

Operating Activities shows cash from your actual business operations. This starts with your Net Income from the P&L, then adjusts for things that affected profit but not cash. The big ones for contractors are: Accounts Receivable changes—if receivables went up, you earned money you haven't collected yet, so cash is lower than profit. Accounts Payable changes—if payables went up, you spent money you haven't paid for yet, so cash is higher than profit. Work in Progress—costs you've incurred on jobs you haven't billed yet.

Investing Activities shows cash spent on long-term assets like equipment, vehicles, or tools. When you buy a $50,000 truck, only part of that shows up on your P&L as depreciation. But the full $50,000 left your bank account.

Financing Activities shows cash from loans, credit lines, and owner contributions or distributions.

Here's the contractor-specific insight: In construction, there's often a huge gap between when you spend money and when you get paid. You might buy materials in week one, pay your crew in weeks one through four, finish the job in week four, invoice in week five, and get paid in week twelve.

That seven-week gap between finishing and getting paid? That's funded entirely by your working capital. And here's the scary part: the more successful you are, the bigger this gap becomes. Win a bigger job? You need more cash to fund it. Get more work? You need more cash for materials and payroll.

This is why 82 percent of contractor failures are cash flow problems, not profitability problems. They're busy, they're profitable on paper, but they run out of cash before the payments come in.

The Cash Flow Statement helps you see this problem before it kills you. Every month, look at the change in cash from operations. If it's consistently negative while your P&L shows profit, you have a collection problem or a growth problem.

In the next lesson, we'll connect all three statements and show you how they work together.`,
          keyPoints: [
            "Profit ≠ Cash — you can be profitable and broke",
            "Operating cash flow adjusts profit for receivables/payables timing",
            "Investing cash flow shows equipment and vehicle purchases",
            "The gap between spending and getting paid must be funded by working capital",
            "82% of contractor failures are cash flow problems, not profit problems"
          ]
        },
        {
          id: "m1-l4",
          title: "How These Three Reports Connect",
          duration: "6 min",
          transcript: `Now let's see how the P&L, Balance Sheet, and Cash Flow Statement work together to tell the complete story of your business.

Think of it this way: The P&L tells you how you performed. The Balance Sheet tells you where you stand. The Cash Flow Statement tells you why your cash changed.

Here's how they connect: Your Net Income from the P&L flows into the Equity section of your Balance Sheet as Retained Earnings. The Cash Flow Statement explains why your cash balance on the Balance Sheet changed, even though your P&L showed a certain profit.

Let me give you a real contractor example. Say you did $500,000 in revenue this year with a 35% gross margin and 10% net margin. Your P&L shows $50,000 in profit. You should have $50,000 more in the bank, right? Not necessarily.

Looking at your Balance Sheet, your Accounts Receivable went up by $40,000 compared to last year—customers are paying slower. Your Accounts Payable went down by $20,000—you've been paying suppliers faster. And you bought a $30,000 work van.

Your Cash Flow Statement explains it: You made $50,000 in profit, but $40,000 is stuck in receivables. You used $20,000 extra to pay down payables. And you spent $30,000 on the van. That's $50,000 minus $40,000 minus $20,000 minus $30,000, which equals negative $40,000.

You made a $50,000 profit, but your bank account went down by $40,000. Both are true.

This is why looking at only one statement gives you an incomplete picture. A contractor who only looks at the P&L thinks everything is fine—profit is up. A contractor who only looks at the bank account panics—cash is down. A contractor who looks at all three understands exactly what happened and can fix it.

In this case, the fix is clear: collect receivables faster, or slow down vendor payments, or both. The financial statements showed you exactly where to focus.

From now on, review all three statements together every month. Ask yourself: Is my profit turning into cash? If not, where is it stuck? The answer is always in these three reports.

That completes Module 1. Before we move on, you'll take a short knowledge check to make sure you've got these concepts down.`,
          keyPoints: [
            "P&L = Performance, Balance Sheet = Position, Cash Flow = Cash changes",
            "Net Income flows to Retained Earnings on Balance Sheet",
            "Cash Flow Statement reconciles profit to actual cash movement",
            "Review all three statements together monthly",
            "Ask: Is my profit turning into cash? Where is it stuck?"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "m1-q1",
          question: "A contractor completes a $100,000 job and sends the invoice. The customer hasn't paid yet. How much revenue should appear on the P&L?",
          options: ["$0 until the customer pays", "$100,000", "Half now, half when paid", "It depends on the payment terms"],
          correctAnswer: 1,
          explanation: "Revenue is recognized when the work is completed and invoiced, not when cash is received. The $100,000 shows as revenue on the P&L and as Accounts Receivable on the Balance Sheet."
        },
        {
          id: "m1-q2",
          question: "What is the target Gross Profit margin for a healthy contractor?",
          options: ["10-15%", "20-25%", "30-40%", "50-60%"],
          correctAnswer: 2,
          explanation: "A healthy contractor should maintain a 30-40% gross profit margin. Below 25% typically indicates a pricing problem that no amount of cost-cutting can fix."
        },
        {
          id: "m1-q3",
          question: "Working capital is calculated as:",
          options: ["Total Assets minus Total Liabilities", "Current Assets minus Current Liabilities", "Cash minus Accounts Payable", "Net Income plus Depreciation"],
          correctAnswer: 1,
          explanation: "Working capital = Current Assets (cash, receivables, inventory) minus Current Liabilities (payables, short-term debt). This measures your ability to fund operations."
        },
        {
          id: "m1-q4",
          question: "A contractor shows $50,000 profit but their cash decreased by $20,000. What's the most likely explanation?",
          options: ["The accountant made an error", "Accounts Receivable increased significantly", "They're not actually profitable", "This is impossible"],
          correctAnswer: 1,
          explanation: "When receivables increase, you've earned revenue but haven't collected the cash yet. This is the most common reason profit doesn't equal cash flow for contractors."
        },
        {
          id: "m1-q5",
          question: "What percentage of contractor failures are attributed to cash flow problems?",
          options: ["25%", "50%", "65%", "82%"],
          correctAnswer: 3,
          explanation: "According to industry studies, 82% of contractor failures are due to cash flow problems—not lack of work or poor workmanship. Understanding your financial statements helps you avoid this fate."
        }
      ]
    },
    {
      id: "module-2",
      number: 2,
      title: "Job Costing Basics",
      duration: "30 min",
      description: "Learn why job-by-job profitability matters more than overall profit, and how to track costs correctly.",
      lessons: [
        {
          id: "m2-l1",
          title: "Why Job Costing Matters More Than Overall Profit",
          duration: "7 min",
          transcript: `Welcome to Module 2. We're going to talk about job costing, and I'm going to start with a controversial statement: Your overall profit margin is almost meaningless. What matters is your profit margin on each individual job.

Here's why. Let's say you're a remodeling contractor who did $1 million in revenue last year with a 10% net profit—$100,000. Not bad, right? But what if I told you that you actually made $200,000 profit on half your jobs and lost $100,000 on the other half?

That changes everything. You're not a 10% profit contractor. You're a highly profitable contractor who's giving away money on certain job types or certain customers. If you knew which jobs were losers, you could stop taking them and potentially double your profit.

This is what job costing reveals. It breaks down your overall numbers into job-by-job performance, so you can see exactly where you're making money and where you're losing it.

Most contractors I work with are shocked when they start job costing. They discover that their biggest jobs aren't their most profitable. They find out that certain job types they love doing actually lose money. They realize that their favorite customers are actually their worst customers financially.

Without job costing, you're flying blind. You might feel busy and successful, but you have no idea if the work you're doing is actually worth doing.

Job costing also helps you bid better. When you know exactly what similar past jobs actually cost, you can estimate future jobs with confidence. No more guessing. No more "I think we'll make money on this." You'll know.

Here's the key mindset shift: Stop thinking about your business as one big operation. Start thinking about it as a collection of individual profit centers—each job is its own mini-business. Some of those mini-businesses are highly profitable. Some are break-even. Some are actively losing money. Your job is to figure out which is which.

In the next lesson, we'll break down the difference between direct costs and indirect costs, which is the foundation of accurate job costing.`,
          keyPoints: [
            "Overall profit margins hide job-by-job performance",
            "You might be profitable overall but losing money on specific job types",
            "Job costing reveals which jobs, customers, and project types make money",
            "Think of each job as its own mini-business/profit center",
            "Accurate job costing enables confident bidding on future work"
          ]
        },
        {
          id: "m2-l2",
          title: "Direct Costs vs Indirect Costs",
          duration: "8 min",
          transcript: `To do job costing correctly, you need to understand the difference between direct costs and indirect costs. This distinction is fundamental, and getting it wrong will give you bad data.

Direct costs are expenses that exist because of a specific job. If you didn't do that job, the cost wouldn't exist. For contractors, direct costs include: Labor for workers on that specific job—their hourly wages, overtime, and payroll taxes. Materials purchased for that job—lumber, drywall, fixtures, concrete, whatever goes into the project. Subcontractor payments for that job. Equipment rental specifically for that job. Permits pulled for that job.

Here's the test: Can you point to a specific job and say "this cost was for that job"? If yes, it's a direct cost.

Indirect costs, also called overhead, are expenses that support your business overall but aren't tied to any specific job. This includes: Your office rent—you don't rent more office space for a bigger job. Your cell phone bill—you don't get a new phone for each project. Vehicle costs for driving between jobs and to suppliers. Insurance premiums. Accounting and bookkeeping fees. Marketing and advertising. Your own salary if you're not on the tools.

The key insight is this: Direct costs should be tracked to each job. Indirect costs should not. Trying to allocate your office rent to specific jobs creates a mess that doesn't help you make decisions.

Now, here's where contractors get tripped up: some costs look direct but are actually indirect, and vice versa.

Example 1: Your truck. The gas you burn driving to and from Job Site A is technically for that job. But tracking gas by job is a nightmare, and the insight isn't worth the effort. Treat vehicle costs as overhead.

Example 2: Your own labor. If you're working on the tools on a job, that time is a direct cost for that job. If you're running the business, it's overhead. Many contractor-owners are 50/50, and they should split their compensation accordingly.

Example 3: Small tools and supplies. The drill bits, saw blades, and tape measures you burn through are technically for specific jobs. But tracking them is more trouble than it's worth. Set a threshold—anything under $100, treat as overhead.

The goal is accuracy without insanity. You want your job costs to be close enough to make good decisions, not perfectly precise at the cost of your sanity.

In the next lesson, we'll tackle the biggest hidden cost that destroys contractor job profitability: labor burden.`,
          keyPoints: [
            "Direct costs exist because of a specific job (labor, materials, subs, permits)",
            "Indirect costs support the business overall (rent, phone, insurance, marketing)",
            "Track direct costs to each job; don't allocate indirect costs to jobs",
            "Some costs are judgment calls—set thresholds for practicality",
            "Goal: accuracy without insanity—good enough to make decisions"
          ]
        },
        {
          id: "m2-l3",
          title: "Labor Burden: The Hidden Cost",
          duration: "8 min",
          transcript: `If there's one concept that separates profitable contractors from struggling ones, it's understanding labor burden. Most contractors dramatically underestimate what their employees actually cost.

Labor burden is everything you pay for an employee beyond their hourly wage. When you pay someone $25 per hour, you're not spending $25 per hour. You're spending $32 to $37 per hour, depending on your specific situation.

Let me break down the components. First, there are mandatory employer taxes. Social Security is 6.2% of wages. Medicare is 1.45%. Federal Unemployment Tax, or FUTA, is around 0.6% after credits. State Unemployment Tax varies by state but typically ranges from 1% to 6%. Just in taxes, you're adding 9% to 14% on top of wages.

Second, there's Workers Compensation insurance. For construction trades, this can range from 3% for low-risk electrical work to 15% or more for roofing. The average across construction is about 8%.

Third, if you provide any benefits, add those costs: health insurance contributions—often $400 to $800 per month per employee, paid time off if you offer it, any retirement match, and training or certifications you pay for.

Let's do the math on that $25 per hour carpenter. Base wage: $25. Payroll taxes at 10%: $2.50. Workers comp at 8%: $2. Health insurance at $600 per month divided by 173 hours: $3.47. That's a total burdened rate of $32.97 per hour. Your $25 employee actually costs you almost $33 per hour.

Here's why this matters for job costing: If you estimate a job using the $25 base wage instead of the $33 burdened rate, you're underpricing every hour of labor by $8. On a job with 200 labor hours, that's $1,600 you didn't account for. That can easily turn a profitable job into a loser.

I see this mistake constantly. A contractor bids based on paying his guys $25 an hour, then wonders why his actual costs are always higher than estimated. It's not that his crew is slow—it's that he's not accounting for the true cost of labor.

From now on, calculate your burdened labor rate and use that for all job costing and estimating. Don't use the base wage. Ever.

In the next lesson, we'll put it all together and show you how to track costs by job in practice.`,
          keyPoints: [
            "Labor burden adds 30-50% to base wages",
            "Components: payroll taxes (9-14%), workers comp (3-15%), benefits",
            "A $25/hour worker typically costs $32-37/hour fully burdened",
            "Always use burdened labor rates for job costing and estimating",
            "Underestimating labor cost is the #1 job costing mistake"
          ]
        },
        {
          id: "m2-l4",
          title: "Tracking Costs by Job in Practice",
          duration: "7 min",
          transcript: `Now let's get practical. How do you actually track costs by job in the real world?

The key is setting up systems that make tracking automatic, or at least easy. If tracking requires extra effort every day, it won't happen. Here's the approach that works.

For labor tracking: Use a time tracking system where workers log hours to specific jobs. This can be an app, paper timesheets, or a whiteboard—whatever your team will actually use. The key is that every hour gets coded to a job. At the end of each week, you should know exactly how many hours were spent on each active job.

For materials: Create a purchase order for each job before buying materials. When you go to the supplier, every purchase goes against a PO number, which ties to a job. When the supplier invoice comes in, it's already coded to the right job. If you buy materials for multiple jobs on one trip, split the receipt immediately—don't wait.

For subcontractors: This is usually easy because each sub invoice is for a specific job. Just make sure to assign the invoice to the job in your accounting system, not to a general subcontractor expense account.

For equipment rental: Same as materials. Code each rental to the specific job using it.

Now, here's the weekly discipline that makes this work. Every Friday, do a 30-minute job cost review. Look at each active job and check: How much have we spent so far in labor, materials, and subs? What percentage of the job is complete? Are we on track to hit our budgeted costs?

That last question is critical. If you're 50% done with a job but you've spent 70% of your labor budget, you have a problem. You need to know this now, while you can still do something about it—not when the job is done and you're wondering where the profit went.

Many accounting systems, including QuickBooks, have job costing features. Use them. Set up each job as a customer or project, and code every expense to the right job. The reports you need—Profit and Loss by Job—are built in.

If you're not ready for software, use a simple spreadsheet. One column for the job name, columns for budgeted labor, materials, subs, and actual labor, materials, subs. Update it weekly. Even this basic approach will transform your understanding of where you make and lose money.

That completes Module 2 on Job Costing Basics. Next up is your knowledge check, and then we'll move on to Key Metrics for Contractors.`,
          keyPoints: [
            "Set up systems that make tracking automatic or easy",
            "Use time tracking to code every labor hour to a specific job",
            "Create purchase orders per job for materials tracking",
            "Do a 30-minute job cost review every Friday",
            "Compare % complete vs % of budget spent to catch problems early"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "m2-q1",
          question: "A contractor's truck gas expense should typically be treated as:",
          options: ["A direct cost for each job driven to", "An indirect cost (overhead)", "Split 50/50 between direct and indirect", "Ignored for job costing purposes"],
          correctAnswer: 1,
          explanation: "Vehicle costs like gas are typically treated as overhead (indirect costs). Tracking gas by job is impractical and the insight isn't worth the administrative burden."
        },
        {
          id: "m2-q2",
          question: "A worker's base wage is $30/hour. What is their approximate fully burdened cost?",
          options: ["$30/hour", "$33/hour", "$39-45/hour", "$60/hour"],
          correctAnswer: 2,
          explanation: "Labor burden typically adds 30-50% to base wages. A $30 base wage becomes approximately $39-45/hour when you add payroll taxes, workers comp, and benefits."
        },
        {
          id: "m2-q3",
          question: "You're 60% complete on a job but have spent 80% of your labor budget. What should you do?",
          options: ["Wait until the job is done to assess", "This is normal variance, no action needed", "Investigate immediately—you have a problem", "Fire the slowest worker"],
          correctAnswer: 2,
          explanation: "If you've spent more of your budget (%) than the work completed (%), you're tracking toward a loss. Investigate immediately while you can still adjust."
        },
        {
          id: "m2-q4",
          question: "Which of these is a direct cost for a specific job?",
          options: ["Office rent", "Your cell phone bill", "Materials purchased for that job", "Accounting fees"],
          correctAnswer: 2,
          explanation: "Direct costs exist because of a specific job. Materials purchased for a job are a direct cost. Office rent, phone bills, and accounting are indirect costs (overhead)."
        },
        {
          id: "m2-q5",
          question: "Why is job-by-job profitability more important than overall profit margin?",
          options: ["It's not—overall margin is what matters", "It helps you identify which jobs/customers to focus on or avoid", "The IRS requires it", "It's only important for large contractors"],
          correctAnswer: 1,
          explanation: "Overall profit hides job-by-job performance. You might be very profitable on some jobs and losing money on others. Job costing reveals which work is actually worth doing."
        }
      ]
    },
    {
      id: "module-3",
      number: 3,
      title: "Key Metrics for Contractors",
      duration: "20 min",
      description: "Learn the specific metrics that matter most for construction businesses and how to track them.",
      lessons: [
        {
          id: "m3-l1",
          title: "Gross Margin by Job Type",
          duration: "5 min",
          transcript: `In Module 1, we talked about Gross Margin as an overall metric. Now let's get more specific: you need to track Gross Margin by job type.

Different types of work have different profit profiles. A kitchen remodel might have a 40% gross margin because of high design fees and fixture markups. A concrete pour might only have 20% because materials are a huge percentage of the job and there's heavy competition.

Neither number is wrong—they're just different. But here's the insight: if you're doing both types of work and lumping them together, your overall margin tells you nothing useful. You might think you're a 30% margin contractor when really you're 40% on kitchens and 20% on concrete.

This matters because your overhead doesn't care about job types. Your rent, truck, and insurance cost the same whether you're doing kitchens or concrete. If your overhead runs 20% of revenue, then a 20% gross margin job barely breaks even. A 40% gross margin job funds your overhead and produces real profit.

Track your gross margin by job type, by customer type, and by project size. You'll start to see patterns. Maybe residential remodels are your best work. Maybe commercial jobs under $50,000 are money losers. Maybe a certain customer who gives you lots of work is actually not profitable.

This data drives strategy. Focus on the job types with the best margins. Raise prices on low-margin work until it's profitable or until customers stop ordering it. Either outcome is fine.

The target gross margin varies by trade, but here are general benchmarks: Remodeling should be 35-45%, New construction typically runs 20-30%, Service and repair work should be 50-60% because of the expertise and urgency premium, and Specialty trades vary widely—electrical often hits 35-40%, while excavation might only hit 20%.

If your numbers are below these benchmarks, you're leaving money on the table.`,
          keyPoints: [
            "Track gross margin by job type, not just overall",
            "Different work types have different profit profiles",
            "Overhead doesn't care about job types—low margin jobs may not cover it",
            "Use margin data to focus on profitable work and fix or drop unprofitable types",
            "Benchmarks: Remodeling 35-45%, New Construction 20-30%, Service 50-60%"
          ]
        },
        {
          id: "m3-l2",
          title: "Days Sales Outstanding (DSO)",
          duration: "5 min",
          transcript: `Days Sales Outstanding, or DSO, measures how long it takes you to collect payment after sending an invoice. For contractors, this is a survival metric.

Here's the formula: Take your Accounts Receivable balance, divide by your average daily revenue, and you get DSO. If you have $100,000 in receivables and average $3,000 per day in revenue, your DSO is about 33 days.

What does this mean? It means it takes you 33 days on average to collect after you invoice. That's 33 days you're financing your customer's project with your money.

For contractors, the benchmark DSO is 30-45 days. Below 30 is excellent. Above 45 is a problem. Above 60 is a crisis.

Why does DSO matter so much? Because every day of DSO is cash you can't use for anything else. If you could cut your DSO from 45 days to 30 days, you'd free up significant working capital.

Let me show you the math. Say your DSO is 45 days and you do $1.2 million in annual revenue, which is about $100,000 per month. Your receivables are roughly $150,000 (45 days of revenue at $3,300 per day). If you cut DSO to 30 days, receivables drop to $100,000. That's $50,000 freed up—money that was stuck in receivables that now flows to your bank account.

What drives DSO up? Slow invoicing—waiting until month-end to bill. Disputed invoices that sit in limbo. Customers who pay slow and you don't follow up. Retainage on commercial jobs (which we can't always control).

What drives DSO down? Invoice immediately when work is complete. Follow up on day 31, not day 60. Fire customers who consistently pay late. Offer small discounts for early payment like 2% off for payment within 10 days.

Track your DSO monthly. Watch the trend. If it's creeping up, you're building a cash crisis that might not show up as a problem for months.`,
          keyPoints: [
            "DSO = Accounts Receivable ÷ Average Daily Revenue",
            "Target: 30-45 days. Above 45 is a problem, above 60 is a crisis",
            "Every day of DSO is cash you're lending to customers at zero interest",
            "Reducing DSO frees working capital immediately",
            "Invoice immediately, follow up at day 31, fire slow-paying customers"
          ]
        },
        {
          id: "m3-l3",
          title: "Work in Progress (WIP) Tracking",
          duration: "5 min",
          transcript: `Work in Progress, or WIP, is one of the most important and misunderstood metrics for contractors. It measures the value of work you've done but haven't yet billed.

Here's why WIP matters: If you've spent $30,000 in labor and materials on a job but only billed $20,000, you have $10,000 in WIP. That's $10,000 of your money stuck in a project. You've done the work, incurred the costs, but haven't even invoiced for it yet—let alone collected payment.

WIP is like invisible receivables. Receivables are at least invoiced—you can see them and collect them. WIP isn't even invoiced yet. It's the most stuck money in your business.

For many contractors, WIP is a bigger problem than receivables. They wait until jobs are 100% complete to bill, not realizing they're financing the entire project out of pocket.

Track your WIP with this simple method: For each active job, calculate: Costs incurred to date minus Amount billed to date. If costs exceed billings, you have WIP. Add it up across all jobs.

The goal is to minimize WIP by billing frequently. Bill every two weeks on long projects, not monthly. Bill for progress, not just milestones. Get paid as you go, not at the end.

Some WIP is unavoidable—you can't bill for drywall you haven't installed yet. But I see contractors who have done 80% of the work and only billed 50%. That's a choice, and it's a bad one.

Here's the formula for staying on top of WIP: Your billing percentage should always exceed your cost percentage. If you've spent 60% of the job costs, you should have billed at least 60% of the contract value. Preferably more.

If costs exceed billings, you're underwater on that job from a cash perspective. Even if the job is profitable, you're financing it out of pocket.

Track WIP weekly as part of your job cost review. Any job where costs exceed billings should be flagged for immediate invoicing.`,
          keyPoints: [
            "WIP = Costs incurred minus Amount billed on active jobs",
            "WIP is 'invisible receivables'—money even more stuck than AR",
            "Bill frequently: every 2 weeks on long projects, not monthly",
            "Billing % should always exceed Cost % on each job",
            "Track WIP weekly and flag any jobs where costs exceed billings"
          ]
        },
        {
          id: "m3-l4",
          title: "Cash Runway: How Long Can You Survive?",
          duration: "5 min",
          transcript: `Cash runway answers a critical question: If no new money came in, how long could you survive?

The formula is simple: Take your current cash balance plus available credit, then divide by your monthly burn rate. The burn rate is your average monthly operating expenses, including payroll.

If you have $75,000 in cash, a $50,000 credit line available, and you spend $40,000 per month on operations, your runway is: $75,000 plus $50,000 divided by $40,000, which equals 3.1 months.

That means if everything went wrong—no collections, no new jobs—you could survive about three months before running out of cash.

Is 3 months good? It's okay. Here are the benchmarks: Less than 2 months is dangerous—you're one bad break from crisis. 2-3 months is tight—you can survive a downturn but not a disaster. 3-6 months is healthy—this is where you want to be. Above 6 months is excellent—you can weather almost anything.

For contractors, 3-6 months of runway is the target. Construction is cyclical and lumpy. You'll have great months and terrible months. Projects get delayed. Customers pay slow. Weather shuts you down.

With 3-6 months of runway, you can handle these bumps without panic. You make better decisions when you're not desperate for the next draw to make payroll.

How do you build runway? First, build a cash reserve by setting aside 5-10% of every payment received until you hit your target. Second, secure a credit line before you need it—banks don't lend to desperate businesses. Third, control your burn rate—don't take on fixed costs like office space or salary employees until your runway supports them.

Check your runway monthly. It's the single best indicator of whether you're building a resilient business or a house of cards.

That completes Module 3. Take the knowledge check, and then we'll move on to Pricing for Profit.`,
          keyPoints: [
            "Runway = (Cash + Available Credit) ÷ Monthly Burn Rate",
            "Target: 3-6 months of runway",
            "Less than 2 months is dangerous, above 6 months is excellent",
            "Build runway by reserving 5-10% of payments and securing credit lines early",
            "Check runway monthly—it's your resilience indicator"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "m3-q1",
          question: "What is a healthy DSO range for contractors?",
          options: ["10-20 days", "30-45 days", "60-90 days", "90-120 days"],
          correctAnswer: 1,
          explanation: "A healthy DSO for contractors is 30-45 days. Below 30 is excellent, above 45 is problematic, and above 60 is a crisis that threatens cash flow."
        },
        {
          id: "m3-q2",
          question: "You've spent $50,000 on a job but only billed $35,000. What is your WIP on this job?",
          options: ["$0", "$15,000", "$35,000", "$85,000"],
          correctAnswer: 1,
          explanation: "WIP = Costs incurred minus Amount billed. $50,000 - $35,000 = $15,000 in WIP. This is $15,000 of your money stuck in the project."
        },
        {
          id: "m3-q3",
          question: "You have $60,000 cash, $40,000 credit available, and burn $25,000/month. What's your runway?",
          options: ["2.4 months", "4 months", "6 months", "10 months"],
          correctAnswer: 1,
          explanation: "Runway = (Cash + Credit) ÷ Monthly Burn = ($60,000 + $40,000) ÷ $25,000 = 4 months. This is in the healthy range of 3-6 months."
        },
        {
          id: "m3-q4",
          question: "Which trade typically has the HIGHEST gross margin benchmark?",
          options: ["New construction", "Service and repair work", "Concrete work", "Excavation"],
          correctAnswer: 1,
          explanation: "Service and repair work typically commands 50-60% gross margins due to the expertise required and urgency premium customers pay."
        },
        {
          id: "m3-q5",
          question: "On an active job, your billing percentage should:",
          options: ["Equal your cost percentage exactly", "Always be lower than your cost percentage", "Always equal or exceed your cost percentage", "It doesn't matter as long as the job is profitable"],
          correctAnswer: 2,
          explanation: "Your billing % should always meet or exceed your cost %. If you've incurred 60% of costs, you should have billed at least 60% of the contract value to avoid financing the job yourself."
        }
      ]
    },
    {
      id: "module-4",
      number: 4,
      title: "Pricing for Profit",
      duration: "25 min",
      description: "Learn to price your work to cover all costs and generate real profit.",
      lessons: [
        {
          id: "m4-l1",
          title: "Markup vs Margin: The Critical Difference",
          duration: "6 min",
          transcript: `One of the most common and costly mistakes contractors make is confusing markup with margin. They are not the same thing, and mixing them up will cause you to underprice every job.

Let me show you the difference. Say you have $80,000 in costs and you want to "add 20%."

If you're using markup, you add 20% to your cost: $80,000 times 1.20 equals $96,000 selling price. Your profit is $16,000.

But what's your margin? Margin is profit divided by selling price. $16,000 divided by $96,000 equals 16.7% margin.

You thought you were making 20%. You're actually making 16.7%. That might not sound like a big difference, but on $1 million in revenue, it's $33,000 less profit than you expected.

Here's the critical insight: Margin is based on the selling price. Markup is based on the cost. Since the selling price is always higher than the cost, the same profit represents a smaller percentage of price than of cost.

The conversions: A 20% markup equals a 16.7% margin. A 25% markup equals a 20% margin. A 33% markup equals a 25% margin. A 50% markup equals a 33% margin. A 100% markup, also known as "doubling your money," equals only a 50% margin.

Why does this matter so much? Because your overhead costs are a percentage of revenue, which means they're based on selling price, not cost. If your overhead is 20% of revenue and your margin is only 16.7%, you're actually losing 3.3% on every job before you take a penny in profit.

Here's the right way to think about it: Decide what margin you need—let's say 35%. Then back into the markup required. The formula is: Markup percentage equals Margin percentage divided by (1 minus Margin percentage). For a 35% margin: 0.35 divided by 0.65 equals 53.8% markup.

So to achieve a 35% margin, you need to mark up your costs by 53.8%, not 35%.

From now on, think in margins, not markups. And always verify: what margin does this markup actually produce?`,
          keyPoints: [
            "Markup is added to cost; Margin is percentage of selling price",
            "20% markup only gives you 16.7% margin",
            "A 50% markup gives you only a 33% margin",
            "Overhead is based on revenue (selling price), so you need margins, not markups",
            "Formula: Markup % = Margin % ÷ (1 - Margin %)"
          ]
        },
        {
          id: "m4-l2",
          title: "Calculating Your Required Markup",
          duration: "7 min",
          transcript: `Now let's figure out exactly what markup you need to be profitable. This isn't a guessing game—it's math.

You need to cover three things with your markup: Direct job costs, which you already know. Overhead, which is your indirect costs. And desired profit.

Let's work through an example. Say you want a 10% net profit margin, and your overhead runs 20% of revenue. That means your gross margin needs to be 30%—enough to cover 20% overhead and leave 10% profit.

We already know that a 30% margin requires about a 43% markup. So if your job costs are $100,000, you should price it at $143,000.

Let's verify: The selling price of $143,000 minus the job cost of $100,000 equals $43,000 gross profit. That's a 30% margin. Overhead at 20% of the selling price is $28,600. Profit is $43,000 minus $28,600, which equals $14,400. That's 10% of the selling price. The math works.

But here's where contractors get this wrong: they don't know their actual overhead percentage. They guess. And they usually guess too low.

Here's how to calculate your real overhead percentage: Take last year's total operating expenses from your P&L—everything below gross profit. Divide by last year's revenue. That's your overhead percentage.

If your overhead is higher than you thought, you need a higher markup. If you've been using a 40% markup but your overhead is actually 25% of revenue, you're barely breaking even.

One more critical point: don't forget your own compensation. If you're not paying yourself in the overhead number, you need to add it. Many contractors work 60-hour weeks and "make profit" that's really just unpaid wages for themselves.

A good test: If you had to hire a manager to run the business while you took six months off, what would you pay them? That number should be in your overhead, even if you're currently paying yourself less.

Do this calculation. Find out your real overhead percentage. Then calculate the markup that actually produces profit.`,
          keyPoints: [
            "You must cover: Direct costs + Overhead + Desired profit",
            "If you want 10% profit and have 20% overhead, you need 30% gross margin",
            "Calculate real overhead: Total Operating Expenses ÷ Revenue",
            "Most contractors underestimate overhead and therefore underprice",
            "Include fair compensation for yourself in overhead, even if you pay yourself less"
          ]
        },
        {
          id: "m4-l3",
          title: "Covering Overhead in Every Bid",
          duration: "6 min",
          transcript: `Here's a concept that transforms how contractors think about pricing: every job must carry its share of overhead.

I hear this all the time: "This job won't cover much overhead, but at least I'll cover my direct costs and keep the guys busy." That's a recipe for slowly going broke.

Let's say your overhead is $200,000 per year and you do $1 million in revenue. Your overhead is 20% of revenue. Every dollar of revenue needs to carry 20 cents toward overhead.

If you do a $50,000 job at a 20% gross margin, you have $10,000 in gross profit. That $10,000 needs to cover 20% of the $50,000 revenue, which is $10,000 in overhead. Congratulations—you made zero profit. You worked all those hours for nothing beyond paying your bills.

This is why low-margin "keep busy" jobs are so dangerous. They don't just make less profit—they make no profit. Worse, they consume your capacity, preventing you from taking profitable work.

Here's the right way to think about it: Set a minimum acceptable margin for any job. If your overhead is 20% and you want 10% net profit, your minimum margin is 30%. Any job that doesn't hit 30% margin either needs its price raised, or you should walk away.

I know what you're thinking: "But my competitors will underbid me." Maybe. But your competitors might also be going broke. The goal isn't to win every job—it's to win profitable jobs.

Let's do the math on a low-margin job. A $50,000 job at 15% margin produces $7,500 gross profit. After 20% overhead allocation, you lose $2,500. And you used crew time that could have gone to a profitable job.

What if you didn't take that job and waited for better work? Maybe you get a $50,000 job at 35% margin. That produces $17,500 gross profit. After overhead, you profit $7,500. That's $10,000 better than the low-margin job—and you did the same amount of work.

This is why knowing your numbers matters. Every bid should pass the overhead test: does this margin cover our overhead allocation and produce profit?`,
          keyPoints: [
            "Every job must carry its share of overhead",
            "Overhead % = Total Operating Expenses ÷ Revenue",
            "Set a minimum acceptable margin (typically Overhead % + Desired Profit %)",
            "Low-margin 'keep busy' work often produces zero profit or a loss",
            "Better to wait for profitable work than fill capacity with losers"
          ]
        },
        {
          id: "m4-l4",
          title: "When to Walk Away from a Job",
          duration: "6 min",
          transcript: `The ability to walk away from bad work is what separates struggling contractors from thriving ones. Let's talk about when and how to do it.

First, the numbers. We've established your minimum margin. Any job that can't hit that minimum after negotiation should get a "no." Not a maybe, not a "let me see if I can make it work"—a no.

But there are other reasons to walk away beyond price.

Walk away if the customer is unreasonable before you start. If they're difficult during the sales process, they'll be ten times worse during the project. The time you spend managing their complaints and change orders and disputes will destroy any profit.

Walk away if the scope is unclear and they won't clarify it. Vague scopes are where profits go to die. "Just give me a ballpark" means they'll hold you to the low end and expect the high end.

Walk away if payment terms are unacceptable. Net 60 or Net 90 on a two-month project means you're financing the entire job. If your margin can't absorb that float, say no.

Walk away if they want you to cut corners on safety or quality. Besides the liability issues, these jobs always end badly and often don't get paid in full.

Walk away if winning would require you to perform poorly on current commitments. Don't torpedo good customers to chase a new one.

Here's the mental shift that makes walking away easier: You're not rejecting income—you're making capacity available for better work. Every hour you spend on a bad job is an hour you can't spend on a good one.

I advise contractors to track their "walk away rate"—the percentage of opportunities they decline. If you're saying yes to everything, you're not being selective enough. A healthy walk away rate is 20-30% of inquiries.

The contractors with the highest profits aren't the ones who win the most bids. They're the ones who only take profitable bids.

That completes Module 4 on Pricing for Profit. Take the knowledge check, then we'll finish with Common Financial Mistakes to Avoid.`,
          keyPoints: [
            "Set a minimum margin and don't take jobs below it",
            "Walk away from unreasonable customers, unclear scopes, bad payment terms",
            "Walking away makes capacity available for better work",
            "Track your 'walk away rate'—target 20-30% of inquiries declined",
            "The most profitable contractors are selective, not busy"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "m4-q1",
          question: "What margin does a 25% markup produce?",
          options: ["25%", "20%", "30%", "15%"],
          correctAnswer: 1,
          explanation: "A 25% markup produces only a 20% margin. Markup is based on cost; margin is based on selling price. $100 cost × 1.25 = $125 price. Profit is $25. $25 ÷ $125 = 20% margin."
        },
        {
          id: "m4-q2",
          question: "Your overhead is 22% of revenue and you want 8% net profit. What's your minimum gross margin?",
          options: ["8%", "22%", "30%", "14%"],
          correctAnswer: 2,
          explanation: "Minimum gross margin = Overhead % + Desired Profit % = 22% + 8% = 30%. Any margin below 30% won't cover overhead and produce your target profit."
        },
        {
          id: "m4-q3",
          question: "A job at 15% margin when your overhead is 20% will likely result in:",
          options: ["A 15% profit", "Breaking even", "A loss", "Depends on the job size"],
          correctAnswer: 2,
          explanation: "If your margin (15%) is less than your overhead rate (20%), you lose money on the job. The 15% gross profit doesn't cover the 20% overhead allocation, resulting in a net loss."
        },
        {
          id: "m4-q4",
          question: "A healthy 'walk away rate' on job inquiries is approximately:",
          options: ["0% - take everything", "5-10%", "20-30%", "50%+"],
          correctAnswer: 2,
          explanation: "Walking away from 20-30% of inquiries indicates healthy selectivity. If you're saying yes to everything, you're likely taking unprofitable work."
        },
        {
          id: "m4-q5",
          question: "What markup is needed to achieve a 35% margin?",
          options: ["35%", "43%", "54%", "65%"],
          correctAnswer: 2,
          explanation: "Markup = Margin ÷ (1 - Margin) = 0.35 ÷ 0.65 = 0.538 or about 54%. You need a 54% markup on costs to achieve a 35% gross margin."
        }
      ]
    },
    {
      id: "module-5",
      number: 5,
      title: "Common Financial Mistakes",
      duration: "20 min",
      description: "Learn to recognize and avoid the mistakes that kill contractor businesses.",
      lessons: [
        {
          id: "m5-l1",
          title: "Confusing Profit with Cash",
          duration: "5 min",
          transcript: `We're going to close this course with the most common financial mistakes I see contractors make. First up: confusing profit with cash.

We covered this in Module 1, but it's so important that it bears repeating. Profit on your P&L does not equal money in your bank account. They're measured differently, they move at different times, and they can point in opposite directions.

I've seen contractors with "profit" who can't make payroll. I've seen contractors with great cash flow who are actually losing money. Neither understands what's happening because they're looking at only one number.

Here's the mistake in action: A contractor has a great year. The P&L shows $150,000 profit. But receivables are up $80,000 from last year. They bought a $60,000 truck. They drew $100,000 in owner distributions. Despite being "profitable," their cash is actually down.

They look at the bank account, panic, and think "I need more work!" They take jobs at bad margins to generate cash. Now they're busy, cash-strapped, AND less profitable.

The fix is understanding both numbers and how they connect. Monthly, review both your P&L and your cash position. Ask: Is my profit turning into cash? If not, where is it stuck?

Usually it's stuck in receivables—you've earned it but not collected it. Sometimes it's stuck in inventory—you bought materials you haven't used. Sometimes it's stuck in equipment—you bought things that won't pay off for years.

None of these are necessarily wrong. But you need to fund them consciously with working capital or financing, not stumble into them and wonder where the money went.

Profit is a measure of performance. Cash is a measure of survival. You need both.`,
          keyPoints: [
            "Profit and cash are different—they move at different times",
            "You can be profitable and cash-strapped simultaneously",
            "Monthly, ask: Is my profit turning into cash? Where is it stuck?",
            "Cash typically gets stuck in receivables, inventory, or equipment",
            "Profit measures performance; Cash measures survival"
          ]
        },
        {
          id: "m5-l2",
          title: "Underpricing Labor",
          duration: "5 min",
          transcript: `The second deadly mistake is underpricing labor. We covered labor burden in Module 2, but let me show you how badly this destroys contractor profitability.

Let's say you have a crew of three workers with an average wage of $28 per hour. You estimate jobs using that $28 rate. Seems reasonable, right?

Wrong. After payroll taxes, workers comp, health insurance, and paid time off, your actual cost is closer to $38 per hour. You're underpricing labor by $10 per hour per worker.

On a job with 500 labor hours across your crew, you've underpriced by $5,000. That's often the entire profit you expected to make.

This is why so many contractors feel like they're working harder than ever but have nothing to show for it. They're literally giving away their labor profit because they don't know their true costs.

But it gets worse. Labor also has non-productive time. Your guys spend time driving to the job site. They spend time cleaning up. They spend time in meetings and training. They take breaks. Time tracking studies show that only 75-85% of paid hours are actually productive job time.

If you estimate 500 hours of job work, you'll actually pay for 550-600 hours. That's another $4,000-6,000 in cost you didn't account for.

Here's the fix: Calculate your burdened labor rate with all taxes and benefits. Then apply an efficiency factor—divide by 0.80 to account for non-productive time. That's your true labor cost for estimating.

Using our example: $28 base wage, becomes $38 after burden, becomes $47.50 after the 80% efficiency adjustment. That's your real cost per productive hour. Use that number.

Anything less, and you're subsidizing your customers' projects with your profit.`,
          keyPoints: [
            "Labor burden adds 30-50% to base wages",
            "Non-productive time (travel, cleanup, breaks) adds another 15-25%",
            "Formula: Burdened Rate ÷ 0.80 = True cost per productive hour",
            "A $28/hr worker may actually cost $47/hr of productive work",
            "Underpricing labor is often the entire profit margin"
          ]
        },
        {
          id: "m5-l3",
          title: "Ignoring Overhead Recovery",
          duration: "5 min",
          transcript: `The third big mistake is ignoring overhead recovery. Many contractors track their direct costs religiously but forget they also have to cover overhead.

Your overhead—rent, insurance, trucks, office staff, marketing—needs to be covered by your jobs. If it's not, you're not making money, even if every job shows a gross profit.

Here's the math that trips people up. Say your overhead is $150,000 per year. You do $750,000 in revenue. Your overhead rate is 20%.

Now you bid a job with $80,000 in direct costs. You add 25% markup and price it at $100,000. Gross profit is $20,000. That's a 20% margin—you feel good.

But wait. That $100,000 job needs to carry $20,000 of overhead (20% of revenue). Your $20,000 gross profit exactly equals your overhead allocation. Net profit: zero.

You did all that work for nothing. Worse, you tied up your crew for weeks on a job that didn't contribute a dime to actual profit.

The fix is simple but requires discipline. Know your overhead rate. Add it to your minimum margin requirement. A job needs to hit that combined target or it's not worth doing.

If your overhead is 20% and you want 10% profit, your minimum margin is 30%. With $80,000 in costs, you need to price at $114,300 to hit 30% margin, not $100,000.

This is why I push contractors to know their numbers. Without knowing your real overhead rate, you can't set prices that actually make money.

One more point: as you grow, your overhead typically grows faster than revenue until you hit certain scale milestones. Track your overhead rate quarterly. If it's creeping up, you need to raise prices or cut costs.`,
          keyPoints: [
            "Overhead must be recovered through job pricing",
            "Overhead rate = Total Operating Expenses ÷ Revenue",
            "Minimum margin must exceed overhead rate to produce profit",
            "A job that barely covers overhead produces zero profit",
            "Track overhead rate quarterly—it can creep up as you grow"
          ]
        },
        {
          id: "m5-l4",
          title: "Growing Too Fast Without Capital",
          duration: "5 min",
          transcript: `The final mistake is one of the most counterintuitive: growing too fast without enough capital. More work should mean more profit, right? Not if you can't fund the growth.

Remember what we learned about cash flow: you spend money today and collect money later. The bigger the job, the more money you need to float. The more jobs you take, the more working capital you need.

Let me show you the math. Say you win a $500,000 project. You'll need to fund about 60% of costs before you collect meaningful payments—that's $300,000 in materials, labor, and subs. Add your 45-day collection cycle, and you might need to float $300,000-400,000 for this one job.

If you don't have that capital, you're in trouble. You'll take cash from other jobs to fund this one. Those jobs then run short. You end up juggling, robbing Peter to pay Paul, and eventually something breaks.

This is why I said 82% of contractor failures are cash flow problems. They're often growing contractors who couldn't finance their success.

Here's how to grow safely. First, know your capacity. Calculate how much working capital you have. Divide by your average float per project. That's how many concurrent projects you can fund.

Second, don't take jobs bigger than you can finance. A $1 million project isn't worth it if funding it destroys your business.

Third, build capital before you need it. Every quarter, assess: can I fund 20% more work than I'm doing? If not, focus on building reserves before pushing for growth.

Fourth, use financing strategically. Credit lines, equipment loans, and even invoice factoring can expand your capacity—but only if you understand the costs and use them deliberately.

The contractors who build lasting businesses are patient. They grow as their capital allows, not as their ambition demands.

That completes the Contractor Finance Fundamentals course. Take the final knowledge check, and if you pass, you'll receive your certificate. Congratulations on investing in your financial education—it's the smartest thing a contractor can do.`,
          keyPoints: [
            "Growth requires working capital to fund the gap between spending and collecting",
            "Calculate your capacity: Working Capital ÷ Average Float per Project",
            "Don't take jobs bigger than you can finance",
            "Build capital reserves before pushing for growth",
            "Patient, capitalized growth beats rapid, underfunded growth"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "m5-q1",
          question: "Your P&L shows $100,000 profit, but your bank account is down. What's the MOST likely explanation?",
          options: ["Accounting error", "Increased receivables or large equipment purchase", "You're not actually profitable", "Bank fees"],
          correctAnswer: 1,
          explanation: "Profit doesn't equal cash. The most common reasons for a gap are: increased receivables (earned but not collected), equipment/vehicle purchases, or large owner distributions."
        },
        {
          id: "m5-q2",
          question: "Workers are productive (actually doing job work) approximately what percentage of paid hours?",
          options: ["95-100%", "85-90%", "75-85%", "60-70%"],
          correctAnswer: 2,
          explanation: "Studies show workers are productive about 75-85% of paid hours. The rest is travel, cleanup, breaks, meetings, and other non-productive time that must be factored into estimates."
        },
        {
          id: "m5-q3",
          question: "Your overhead rate has increased from 18% to 24%. What should you do?",
          options: ["Nothing—overhead varies normally", "Cut overhead costs and/or raise prices", "Take more jobs to spread overhead across more revenue", "Hire more staff to increase capacity"],
          correctAnswer: 1,
          explanation: "Rising overhead rate means your prices may no longer cover costs. Either cut overhead expenses or raise prices. Taking more jobs at insufficient margins won't help."
        },
        {
          id: "m5-q4",
          question: "Why is fast growth dangerous for contractors?",
          options: ["Customers don't like growing contractors", "Growth requires working capital that may not be available", "Fast growth always leads to quality problems", "Employees prefer stable companies"],
          correctAnswer: 1,
          explanation: "Growth requires floating more money between spending (labor, materials) and collecting (customer payments). Without adequate working capital, fast growth leads to cash crises."
        },
        {
          id: "m5-q5",
          question: "Before pushing for growth, you should ask:",
          options: ["Do I want to grow?", "Will customers keep coming?", "Can I fund 20% more work than I'm currently doing?", "Is my competition growing?"],
          correctAnswer: 2,
          explanation: "Growth requires capital. Before pursuing growth, ensure you have the working capital to fund additional work without straining your current operations."
        }
      ]
    }
  ]
};

// Helper to get total questions count
export function getTotalQuestions(course: Course): number {
  return course.modules.reduce((total, module) => total + module.knowledgeCheck.length, 0);
}

// Helper to get total lessons count
export function getTotalLessons(course: Course): number {
  return course.modules.reduce((total, module) => total + module.lessons.length, 0);
}
