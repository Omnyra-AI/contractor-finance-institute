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

// QuickBooks Setup for Contractors Course
export const quickbooksSetupForContractors: Course = {
  id: "quickbooks-setup-contractors",
  title: "QuickBooks Setup for Contractors",
  slug: "quickbooks-setup-contractors",
  description: "Configure QuickBooks Online the right way for your contracting business: chart of accounts, job costing, classes, and reporting that actually works.",
  duration: "1.5 hours",
  level: "Beginner",
  passingScore: 80,
  modules: [
    {
      id: "qb-module-1",
      number: 1,
      title: "Setting Up Your Chart of Accounts",
      duration: "30 min",
      description: "Create a chart of accounts designed specifically for contractors that enables proper job costing and financial reporting.",
      lessons: [
        {
          id: "qb1-l1",
          title: "Why Your Default Chart of Accounts Is Wrong",
          duration: "7 min",
          transcript: `Welcome to QuickBooks Setup for Contractors. I'm going to show you how to configure QuickBooks Online specifically for a contracting business. And we're going to start with the most fundamental thing: your chart of accounts.

When you first set up QuickBooks, it gives you a default chart of accounts. That default is designed for a generic small business—a coffee shop, a consultant, a retailer. It is not designed for a contractor, and using it as-is will make your life harder and your reports useless.

Here's what's wrong with the default setup. First, there's no separation between Cost of Goods Sold and Operating Expenses that makes sense for construction. The default might have one COGS account for "Cost of Goods Sold" and then a bunch of expense accounts. But as a contractor, you need to track direct job costs separately from overhead. Materials, labor, and subs for jobs are fundamentally different from your truck payment and office rent.

Second, the default doesn't support job costing. To know which jobs are profitable, you need your costs structured in a way that lets you track them by job. The default chart doesn't set you up for that.

Third, the account names are generic. "Supplies" could mean anything. "Automobile Expense" lumps everything together. You need specificity. "Job Materials," "Subcontractor Payments," "Vehicle Fuel," "Vehicle Maintenance"—these tell you something actionable.

Here's the structure we're going to build. Under Cost of Goods Sold, you'll have accounts for: Direct Labor, Job Materials, Subcontractor Payments, Equipment Rental, and Permits and Fees. These are your direct job costs.

Under Operating Expenses, you'll separate: Vehicle Expenses (broken into Fuel, Maintenance, Insurance), Office Expenses (Rent, Utilities, Supplies), Insurance (General Liability, Workers Comp, Vehicle), Marketing, Professional Fees, and Owner Compensation.

This structure does two things. First, it separates direct costs from overhead so you can calculate true gross profit. Second, it gives you enough detail to actually understand where your money goes without being so granular that it's unmanageable.

In the next lesson, I'll walk you through creating these accounts in QuickBooks step by step.`,
          keyPoints: [
            "Default QuickBooks chart of accounts is designed for generic businesses, not contractors",
            "Contractors need clear separation between direct job costs (COGS) and overhead",
            "Direct costs include: Labor, Materials, Subcontractors, Equipment, Permits",
            "Overhead includes: Vehicles, Office, Insurance, Marketing, Professional Fees",
            "Proper structure enables job costing and meaningful financial reports"
          ]
        },
        {
          id: "qb1-l2",
          title: "Creating Contractor-Specific COGS Accounts",
          duration: "8 min",
          transcript: `Now let's create your Cost of Goods Sold accounts in QuickBooks. These are the accounts that will track every dollar you spend directly on jobs.

First, log into QuickBooks Online and go to Settings, then Chart of Accounts. You'll see a list of existing accounts. We're going to add new ones and potentially rename or delete some defaults.

Let's create your first COGS account: Direct Labor. Click "New" at the top right. For Account Type, select "Cost of Goods Sold." For Detail Type, select "Cost of Labor - COGS." Name it "Direct Labor - Crews." In the description, put "Wages and burden for crew labor on job sites." Save it.

Now create your next account: Job Materials. Again, Account Type is "Cost of Goods Sold." Detail Type is "Supplies and Materials - COGS." Name it "Job Materials." Description: "Materials purchased for specific jobs - lumber, drywall, fixtures, etc."

Next is Subcontractor Payments. Account Type: "Cost of Goods Sold." Detail Type: "Cost of Labor - COGS." Name it "Subcontractor Payments." Description: "Payments to subcontractors for job work - electrical, plumbing, HVAC, etc."

Then Equipment Rental. Account Type: "Cost of Goods Sold." Detail Type: "Cost of Labor - COGS." Name it "Equipment Rental - Jobs." Description: "Equipment rentals for specific jobs - excavators, lifts, scaffolding, etc."

Finally, Permits and Fees. Account Type: "Cost of Goods Sold." Detail Type: "Supplies and Materials - COGS." Name it "Permits and Job Fees." Description: "Permits, inspections, and fees for specific jobs."

Now here's a critical setup step. For job costing to work, these COGS accounts need to be tracked by Customer, which in QuickBooks is how you'll track jobs. Go to each account you just created, click Edit, and make sure "Track by Customer" is enabled. This is what allows you to see costs broken down by job.

One thing to avoid: don't create too many COGS sub-accounts. Some contractors want to break out "Lumber" separate from "Drywall" separate from "Fixtures." That level of detail sounds good but becomes a nightmare to maintain. Your suppliers often sell you multiple categories on one invoice. Keep it simple with "Job Materials" and use the memo field or item descriptions for detail when needed.

In the next lesson, we'll set up your Operating Expense accounts—your overhead costs.`,
          keyPoints: [
            "Create COGS accounts: Direct Labor, Job Materials, Subcontractors, Equipment Rental, Permits",
            "Account Type = 'Cost of Goods Sold' for all direct job costs",
            "Enable 'Track by Customer' on each COGS account for job costing",
            "Keep COGS accounts simple—don't over-categorize materials",
            "Use memo fields for additional detail instead of creating excessive sub-accounts"
          ]
        },
        {
          id: "qb1-l3",
          title: "Setting Up Operating Expense Accounts",
          duration: "8 min",
          transcript: `Now let's set up your Operating Expense accounts—your overhead costs. These are the costs of running your business that aren't tied to specific jobs.

The key principle here is: group related expenses together, but keep enough detail to identify problems. You want to know if vehicle costs are rising, but you probably don't need separate accounts for every vehicle.

Let's start with Vehicle Expenses. In your Chart of Accounts, create a parent account first. Click "New," Account Type "Expenses," Detail Type "Auto," and name it "Vehicle Expenses." Save it.

Now create sub-accounts under Vehicle Expenses. For each, select "Vehicle Expenses" as the parent account. Create these: "Vehicle Fuel" for gas and diesel. "Vehicle Maintenance" for oil changes, repairs, tires. "Vehicle Insurance" for auto insurance premiums. "Vehicle Payments" for loan or lease payments.

Why break out vehicles this way? Because if your vehicle costs spike, you want to know why. Was it a big repair? Is fuel eating you alive? Did insurance go up? This structure tells you.

Next, Office and Administrative expenses. Create a parent called "Office & Admin." Sub-accounts: "Office Rent" for your office or shop space. "Office Utilities" for electric, internet, phone. "Office Supplies" for paper, printer ink, small items. "Software Subscriptions" for QuickBooks, estimating software, apps.

Now Insurance. Separate this from vehicle insurance because it's a different beast. Create a parent "Business Insurance" with sub-accounts: "General Liability Insurance" for GL premiums. "Workers Compensation" for workers comp premiums. Note that vehicle insurance is under Vehicle Expenses—that's intentional for analysis.

Professional Fees get their own category. Create "Professional Fees" with sub-accounts: "Accounting and Bookkeeping" for your accountant or bookkeeper. "Legal Fees" for attorney costs. "Consulting" for business advisors or coaches.

Marketing and Advertising. Create "Marketing" with sub-accounts: "Online Advertising" for Google Ads, Facebook, etc. "Print and Signage" for yard signs, truck wraps, flyers. "Website" for hosting, updates, domain fees.

Finally, Owner Compensation. This is important—your pay should be visible, not buried. Create "Owner Compensation" as an expense account. Some contractors put their pay through payroll, which is fine. But if you take draws, you need to track them, and this account makes them visible.

One more thing: delete or make inactive any default accounts you're not using. A cluttered chart of accounts leads to miscoding errors. If you don't have employees yet, hide the payroll accounts. If you don't do retail, hide inventory accounts. Keep it clean.

Next up: we'll set up Classes in QuickBooks to add another dimension of tracking.`,
          keyPoints: [
            "Group related expenses under parent accounts (Vehicle, Office, Insurance, etc.)",
            "Break down vehicles: Fuel, Maintenance, Insurance, Payments",
            "Separate business insurance (GL, Workers Comp) from vehicle insurance",
            "Create visible Owner Compensation account—don't bury your pay",
            "Delete or hide unused default accounts to prevent miscoding"
          ]
        },
        {
          id: "qb1-l4",
          title: "Using Classes for Job Types and Divisions",
          duration: "7 min",
          transcript: `QuickBooks has a powerful feature called Classes that most contractors either don't know about or don't use properly. Classes let you categorize transactions in a second dimension beyond your chart of accounts. Used correctly, they transform your reporting.

Here's the concept: Your chart of accounts tells you WHAT you spent money on—labor, materials, fuel. Classes tell you which PART of your business it was for.

Let me give you examples. Say you do both residential remodeling and commercial tenant improvements. You could create two classes: "Residential" and "Commercial." Every transaction you enter gets tagged with one of these classes. Now you can run a Profit & Loss by Class and see: Am I more profitable on residential or commercial work?

Or say you have two crews: a framing crew and a finish crew. Create classes "Framing Division" and "Finish Division." Now you can see which division is more profitable.

To enable Classes, go to Settings, then Account and Settings, then Advanced. Turn on "Track classes." I recommend also enabling "Warn me when a transaction isn't assigned a class." This forces you to classify everything, which makes your reports accurate.

Now let's set up your Classes. Go to Settings, then All Lists, then Classes. Click "New class." For a typical residential contractor, I'd suggest these classes: New Construction, Remodeling, Service and Repair, and Other (for miscellaneous or overhead-only transactions).

For a commercial contractor, consider: Tenant Improvement, Ground-Up Construction, Maintenance Contracts, and Other.

Here's the power: When you enter a bill, you'll code it to an Account (like Job Materials) AND a Class (like Remodeling). When you run your Profit & Loss by Class, you'll see your gross margin on Remodeling versus New Construction versus Service Work. This tells you where to focus.

One warning: Don't create too many classes. Five or six is usually plenty. If you try to track by job type AND crew AND service area AND customer type, you'll never maintain it. Pick the one dimension that matters most for business decisions.

Most contractors find job type or service type to be the most valuable class structure. It answers the question: which type of work should I do more of?

We'll complete this module with a lesson on numbering conventions that make your chart of accounts easier to use.`,
          keyPoints: [
            "Classes add a second tracking dimension beyond chart of accounts",
            "Use classes to track job types (Residential vs Commercial) or divisions",
            "Enable 'Track classes' and 'Warn when unassigned' in Settings",
            "Keep classes simple—5-6 categories maximum",
            "Classes enable P&L by job type to identify most profitable work"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "qb1-q1",
          question: "Why is the default QuickBooks chart of accounts problematic for contractors?",
          options: ["It has too many accounts", "It doesn't separate direct job costs from overhead", "It's designed for manufacturing", "It requires too much customization"],
          correctAnswer: 1,
          explanation: "The default chart of accounts doesn't distinguish between costs that go directly into jobs (materials, labor, subs) and overhead costs. This makes job costing and gross profit calculation impossible."
        },
        {
          id: "qb1-q2",
          question: "Which setting must be enabled on COGS accounts for job costing to work?",
          options: ["Track by Location", "Track by Customer", "Track by Class", "Track by Project"],
          correctAnswer: 1,
          explanation: "In QuickBooks, jobs are tracked as Customers (or sub-customers). Enabling 'Track by Customer' on COGS accounts allows you to see costs broken down by job."
        },
        {
          id: "qb1-q3",
          question: "Where should vehicle insurance be categorized in your chart of accounts?",
          options: ["Under Business Insurance", "Under Vehicle Expenses", "Under General Liability", "Under Operating Expenses"],
          correctAnswer: 1,
          explanation: "Vehicle insurance should be a sub-account under Vehicle Expenses. This groups all vehicle-related costs together so you can analyze total vehicle costs as a category."
        },
        {
          id: "qb1-q4",
          question: "What is the primary purpose of QuickBooks Classes for contractors?",
          options: ["To track individual customers", "To categorize expenses by type", "To track job types or divisions for P&L comparison", "To manage employee time"],
          correctAnswer: 2,
          explanation: "Classes let you categorize transactions by a second dimension (like job type). This enables running P&L by Class to compare profitability across different types of work."
        },
        {
          id: "qb1-q5",
          question: "How many Classes should most contractors create?",
          options: ["As many as possible for detailed tracking", "5-6 at most", "One per job", "One per customer"],
          correctAnswer: 1,
          explanation: "Keep classes simple—5-6 maximum. Too many classes become impossible to maintain and lead to inconsistent coding. Focus on the one dimension that most impacts business decisions."
        }
      ]
    },
    {
      id: "qb-module-2",
      number: 2,
      title: "Job Costing in QuickBooks",
      duration: "30 min",
      description: "Configure QuickBooks to track costs by job so you know which projects are profitable and which are losing money.",
      lessons: [
        {
          id: "qb2-l1",
          title: "Setting Up Jobs as Sub-Customers",
          duration: "7 min",
          transcript: `Now let's set up the job costing structure in QuickBooks. The key insight is this: QuickBooks doesn't have a dedicated "job" or "project" feature in the way construction software does. Instead, you use the Customer system creatively.

Here's the structure: Each client is a Customer. Each job for that client is a Sub-Customer. If you do a kitchen remodel for John Smith, "John Smith" is the Customer and "Smith Kitchen Remodel" is the Sub-Customer. If you later do a bathroom for him, you add "Smith Bathroom" as another Sub-Customer.

To set this up, go to Sales, then Customers. Click "New customer" to add a new client. Enter their basic info: name, address, email, phone. Save it.

Now click on that customer and click "New customer" again. QuickBooks will ask if this is a sub-customer. Yes, it is. Name this sub-customer with a job identifier—I recommend "Last Name - Project Description" like "Smith - Kitchen Remodel." Make sure "Is sub-customer" is checked and the parent is the correct customer.

Here's a pro tip: Use a consistent naming convention. I recommend: Year, then Customer Name, then brief Project Description. So "2025 Smith Kitchen" or "2025-001 Smith Kitchen." This keeps jobs organized chronologically and makes them easy to find.

Why does this structure matter? Because when you enter bills, you'll assign them to the sub-customer, which is the job. When you create invoices, you'll invoice the sub-customer. At any time, you can run a report showing all income and expenses for that sub-customer—that's your job profitability report.

One critical setting: Go to Settings, then Account and Settings, then Advanced. Make sure "Enable projects" is ON. This adds some project tracking features. Also verify that "Track expenses by customer" is enabled—this is essential for job costing.

Now here's how you'll use this daily. When you enter a bill for materials, you'll select the job (sub-customer) in the "Customer" field. When you enter time for crew labor, you'll assign it to the job. When you enter a subcontractor invoice, you assign it to the job.

Every cost that's directly related to a job gets assigned to that job's sub-customer. Costs that aren't job-specific—like your phone bill or office rent—don't get assigned to any customer.

This might seem like extra work at first, but it becomes automatic. And the payoff is huge: you'll know exactly how much you made or lost on every single job.`,
          keyPoints: [
            "Customers = Clients, Sub-Customers = Jobs/Projects",
            "Use consistent naming: Year + Customer + Project (e.g., '2025 Smith Kitchen')",
            "Enable 'Projects' and 'Track expenses by customer' in Settings",
            "Assign every job-related cost to the job's sub-customer",
            "Non-job costs (overhead) don't get assigned to any customer"
          ]
        },
        {
          id: "qb2-l2",
          title: "Entering Bills with Job Costing",
          duration: "8 min",
          transcript: `Let's walk through how to enter bills with proper job costing. This is where most contractors either get it right or mess up their entire financial picture.

When a bill comes in—from a supplier, subcontractor, or rental company—you need to code it correctly. Let's use an example: You receive a $5,000 invoice from your lumber supplier for materials used on the Smith Kitchen job.

Go to Expenses, then Bills, then "Create bill." Select the vendor—your lumber supplier. Enter the bill date, due date, and bill number.

Now here's the critical part. In the line item section, you'll enter the account: "Job Materials" (one of the COGS accounts we created). In the Customer column, select "Smith - Kitchen Remodel" (the sub-customer). For the amount, enter $5,000. If you're using Classes, select the appropriate class like "Remodeling."

This single entry does three things: It records the expense in your Job Materials account (so your P&L is accurate). It assigns the cost to the Smith Kitchen job (so your job costing is accurate). And it tracks it under the Remodeling class (so your P&L by Class is accurate).

Now let's do a more complex example. Say you have a $12,000 bill from a supplier, but it covers three different jobs. Don't just lump it all together. Enter three line items: $6,000 to "Job Materials" assigned to "Smith Kitchen." $4,000 to "Job Materials" assigned to "Johnson Bathroom." $2,000 to "Job Materials" assigned to "Williams Deck." Same account, different customers.

What about a bill that's NOT job-related? Say your $200 phone bill. Go through the same process, but leave the Customer field blank. Code it to "Office Utilities" or whatever expense account is appropriate. No customer means no job—this is overhead.

One common mistake: Contractors enter subcontractor bills to "Subcontractor Expense" under Operating Expenses instead of "Subcontractor Payments" under Cost of Goods Sold. This destroys your gross margin calculation. Subcontractor costs on jobs are COGS, not operating expenses. Always use your COGS accounts for job-related costs.

Another tip: Enter bills promptly. If you let bills pile up and enter them all at month-end, you're likely to make coding errors. Enter them as they arrive, when you still remember what job they were for.`,
          keyPoints: [
            "Every job-related bill needs: Account (COGS), Customer (Job), Class (if using)",
            "Split bills that cover multiple jobs into separate line items",
            "Leave Customer blank for overhead costs—that's how you separate them",
            "Subcontractor costs are COGS, not Operating Expenses",
            "Enter bills promptly while you remember the job context"
          ]
        },
        {
          id: "qb2-l3",
          title: "Tracking Labor Costs to Jobs",
          duration: "8 min",
          transcript: `Labor is often the biggest cost on a job, yet it's the one most contractors track poorly in QuickBooks. Let's fix that.

There are two ways to track labor to jobs in QuickBooks: through payroll or through time entries. The method you use depends on how you run payroll.

If you use QuickBooks Payroll, labor tracking can be automatic. Here's how: When employees log time, they should select the job they worked on. If you're using QuickBooks Time (formerly TSheets), employees can pick the customer/job when they clock in. This time flows into payroll and automatically allocates labor costs to jobs.

To set this up, go to Payroll Settings, then Preferences. Enable "Track billable time." Make sure "Time tracking by customer" is on. When you run payroll, QuickBooks will ask if you want to assign wages to customers. Yes, you do.

But here's the catch: many contractors don't use QuickBooks Payroll, or they have employees work on multiple jobs per day and can't easily split time. In that case, you need a manual method.

The manual method involves creating timesheet entries or journal entries. Each week, after payroll runs, enter a journal entry that allocates labor costs to jobs. Debit "Direct Labor" for each job's share of wages. Credit "Direct Labor" for the unallocated total. The net effect is zero, but now the labor is assigned to jobs.

Let me give you a simpler approach many contractors use: the labor rate method. Calculate your average burdened labor rate—say, $35 per hour including wages, taxes, and benefits. Track hours by job on paper or in a simple spreadsheet. At month-end, enter a bill or journal entry: Direct Labor charged to "Smith Kitchen" at 120 hours × $35 = $4,200.

This isn't perfect—it's an allocation, not actual payroll tracking. But it's good enough for job costing purposes and much simpler than trying to get payroll to split perfectly.

The key point: However you do it, labor costs must get assigned to jobs. Labor is typically 30-50% of job costs. If you're not tracking it to jobs, your job costing is fiction.

One more thing: Don't forget labor burden. The $25 you pay an employee isn't your cost—it's $32-38 after payroll taxes, workers comp, and benefits. When allocating labor to jobs, use the burdened rate. Otherwise, you'll think jobs are more profitable than they are.`,
          keyPoints: [
            "Use QuickBooks Payroll with time tracking for automatic labor allocation",
            "Alternative: Labor rate method—calculate burdened rate × hours per job",
            "Labor burden (taxes, workers comp, benefits) adds 30-50% to base wages",
            "Always allocate labor to jobs—it's 30-50% of job costs",
            "Track hours by job even if you do manual allocation monthly"
          ]
        },
        {
          id: "qb2-l4",
          title: "Running Job Profitability Reports",
          duration: "7 min",
          transcript: `Everything we've set up leads to this: reports that show you exactly how profitable each job is. Let's run these reports and interpret them.

The primary report is "Profit and Loss by Customer." Go to Reports, search for "Profit and Loss by Customer" or find it under Business Overview. Set your date range to include the jobs you want to analyze.

This report shows a column for each customer and sub-customer. You'll see: Revenue (what you invoiced for each job), Cost of Goods Sold (materials, labor, subs you assigned to each job), and Gross Profit (revenue minus COGS).

Here's how to read it. Look at the gross profit percentage for each job. Find a job with 40% gross margin—that's a winner. Find one with 15%—that's a problem. Look for patterns: are certain job types consistently lower margin?

For more detail, run "Transaction List by Customer." This shows every transaction assigned to a job. If a job looks unprofitable, drill into this report to see why. Was it labor hours? Materials? A sub that cost more than expected?

Another powerful report: "Unbilled Charges by Customer." This shows costs you've incurred on jobs that haven't been invoiced yet. If you have $20,000 in unbilled charges, that's $20,000 of your money tied up in work-in-progress. This is your WIP report.

Here's a report most contractors never run but should: "Profitability by Job Type." If you've been using Classes, run "Profit and Loss by Class." This compares your different types of work. Maybe kitchens run at 38% gross margin while bathrooms only hit 25%. That's actionable information.

Let me share how I recommend using these reports. Weekly, run a quick look at costs by job for active projects. You're checking: are we on track, or are costs piling up faster than expected? Monthly, run the full Profit and Loss by Customer. Review completed jobs—did they hit target margins? Quarterly, run Profit and Loss by Class. Are you focusing on the right types of work?

The contractors who make the most money aren't necessarily the ones who do the most work. They're the ones who know which work makes money and focus on that. These reports tell you exactly that.`,
          keyPoints: [
            "Profit and Loss by Customer shows gross profit per job",
            "Transaction List by Customer shows detailed costs for investigation",
            "Unbilled Charges by Customer = your Work-in-Progress report",
            "Profit and Loss by Class compares profitability across job types",
            "Weekly: check active job costs. Monthly: review completed jobs. Quarterly: analyze by class"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "qb2-q1",
          question: "In QuickBooks, how do you structure jobs for job costing?",
          options: ["Create each job as a separate Company", "Use the Projects feature only", "Create jobs as Sub-Customers under the client", "Create jobs as Vendors"],
          correctAnswer: 2,
          explanation: "Jobs are created as Sub-Customers under the parent Customer (the client). This allows all income and expenses for that job to be tracked together."
        },
        {
          id: "qb2-q2",
          question: "When entering a bill that covers materials for three different jobs, you should:",
          options: ["Enter the total to one job and note the others in the memo", "Enter three separate line items assigned to each job", "Create three separate bills", "Use a journal entry instead"],
          correctAnswer: 1,
          explanation: "Enter separate line items for each job's portion. All lines can use the same COGS account but different Customers (jobs). This accurately allocates costs."
        },
        {
          id: "qb2-q3",
          question: "How should subcontractor costs for jobs be categorized?",
          options: ["Operating Expenses - Subcontractor Expense", "Cost of Goods Sold - Subcontractor Payments", "Other Expenses - Contract Labor", "It doesn't matter as long as it's consistent"],
          correctAnswer: 1,
          explanation: "Subcontractor costs on jobs are direct job costs and must be in COGS. Putting them in Operating Expenses destroys your gross margin calculation."
        },
        {
          id: "qb2-q4",
          question: "When allocating labor costs to jobs, you should use:",
          options: ["The employee's base hourly wage", "The burdened labor rate including taxes and benefits", "Just the federal minimum wage", "Whatever rate is in the contract"],
          correctAnswer: 1,
          explanation: "Use the burdened labor rate which includes wages plus payroll taxes, workers comp, and benefits. This is your true labor cost—30-50% higher than base wages."
        },
        {
          id: "qb2-q5",
          question: "The 'Unbilled Charges by Customer' report shows you:",
          options: ["Invoices that customers haven't paid", "Work-in-Progress (costs incurred but not yet billed)", "Your total accounts receivable", "Deposits you've collected"],
          correctAnswer: 1,
          explanation: "Unbilled Charges shows costs you've incurred on jobs that haven't been invoiced yet. This is your Work-in-Progress—money tied up in active jobs."
        }
      ]
    },
    {
      id: "qb-module-3",
      number: 3,
      title: "Reporting and Best Practices",
      duration: "30 min",
      description: "Set up the reports and routines that keep your QuickBooks data accurate and actionable.",
      lessons: [
        {
          id: "qb3-l1",
          title: "Customizing Your Dashboard and Reports",
          duration: "7 min",
          transcript: `QuickBooks has a lot of reports, but most of them aren't useful for contractors out of the box. Let's customize your dashboard and create the reports that actually help you run your business.

First, let's fix your Dashboard. When you log in, QuickBooks shows you a default dashboard with graphs and numbers. Most of these are generic. Go to Dashboard, then look for "Customize" or the gear icon.

I recommend showing these widgets: Profit and Loss summary (with comparison to prior period), Bank account balances (your actual cash position), Invoices (open invoices and their age), Bills (upcoming bills due), and if available, a Cash Flow snapshot.

Remove widgets you don't need: If you don't do inventory, hide inventory reports. If you don't use QuickBooks for estimates, hide those. A clean dashboard shows you what matters without distraction.

Now let's create your go-to reports and save them. The first essential report is your Contractor P&L. Go to Reports, find Profit and Loss. Customize it: Show comparison to prior period (either prior month or prior year). Group by month or quarter for trend analysis. If you use Classes, add "Show class columns."

Save this customization: Click "Save customization." Name it something like "Contractor P&L - Monthly Compare." Now you can run this exact report anytime from your saved reports.

Second report: Job Profitability. Find "Profit and Loss by Customer." Customize to show: Current period, gross profit percentage column. Filter to show only sub-customers (jobs, not parent customers). Save it as "Job Profitability Report."

Third report: Aged Receivables. This one's critical for cash flow. Find "Accounts Receivable Aging Summary." Show aging buckets: Current, 1-30, 31-60, 61-90, Over 90. Save it as "AR Aging - Collections."

Fourth report: Cash Flow projection. QuickBooks doesn't have a great built-in projection, but you can approximate it. Find "Statement of Cash Flows." This at least shows you how cash is moving. Save it as "Cash Movement Analysis."

One power tip: Create a memorized report group. Go to Reports, find "Custom Reports," and create a group called "Weekly Review" or "Monthly Close." Add your key reports to this group. Now you can run the entire group with one click.

Finally, schedule reports to email to yourself. Go to a saved report, click "Set email schedule." Have your key reports show up in your inbox every Monday morning. If you don't look at reports because you forget to run them, this forces the habit.`,
          keyPoints: [
            "Customize dashboard to show: P&L summary, bank balances, invoices, bills",
            "Create and save custom reports: Contractor P&L, Job Profitability, AR Aging",
            "Add comparison columns to P&L for trend analysis",
            "Create a 'Weekly Review' report group for one-click reporting",
            "Schedule key reports to email automatically"
          ]
        },
        {
          id: "qb3-l2",
          title: "Weekly and Monthly Bookkeeping Routines",
          duration: "8 min",
          transcript: `Good QuickBooks data requires consistent routines. Here's the weekly and monthly process that keeps your books accurate and useful.

Weekly routine—do this every Friday. First, reconcile your bank feeds. Log in, go to Banking, and review all the imported transactions. For each one: If it matches an existing bill or invoice, match it. If it's new, categorize it correctly and assign to a job if applicable. If you don't know what it is, don't guess—mark it for review.

Second, enter any bills that came in this week that aren't in the system yet. Some vendors don't have electronic billing, so you get paper invoices. Enter them now while you remember what they were for.

Third, send invoices for completed work. Don't wait until month-end to bill. If a job phase is done, invoice it this week. Cash flow depends on invoicing promptly.

Fourth, review accounts receivable. Who owes you money? Who's past 30 days? Make collection calls while invoices are still fresh. A 35-day-old invoice is much easier to collect than a 65-day-old one.

This weekly routine takes about 1-2 hours. It keeps your data current and prevents month-end chaos.

Monthly routine—do this in the first few days of each month. First, complete bank reconciliation for the prior month. Go to Banking, then Reconcile. Match QuickBooks to your bank statement. Every dollar should match. If there's a difference, find it before you close the month.

Second, reconcile credit cards the same way. Every credit card transaction should be categorized and reconciled.

Third, review the P&L for the month. Does revenue look right? Do expenses seem reasonable? Look for anything that seems off—a negative number, an unusually large expense, a vendor you don't recognize.

Fourth, review job profitability for any jobs that completed that month. Did they hit target margins? If not, investigate why and learn from it.

Fifth, review accounts payable. What bills are due? Do you have cash to pay them? This is your cash flow check.

Sixth, create any month-end entries. This might include: depreciation if you track it, labor allocations if you do them monthly, or any accruals your accountant requires.

The monthly routine takes 2-4 hours but gives you a clean, accurate picture of your business. It's also when you catch errors before they compound.`,
          keyPoints: [
            "Weekly: Reconcile bank feeds, enter bills, send invoices, review AR",
            "Monthly: Bank and credit card reconciliation, P&L review, job profitability check",
            "Never guess on transactions—mark unknown items for review",
            "Invoice promptly—don't wait until month-end to bill completed work",
            "Weekly routine: 1-2 hours. Monthly routine: 2-4 hours"
          ]
        },
        {
          id: "qb3-l3",
          title: "Common QuickBooks Mistakes to Avoid",
          duration: "8 min",
          transcript: `I've seen contractors make the same QuickBooks mistakes over and over. Let's go through the big ones so you can avoid them.

Mistake number one: Using the wrong account type for COGS. I mentioned this before, but it's so common I'm repeating it. Subcontractor payments, job materials, and direct labor are Cost of Goods Sold, not Operating Expenses. If you code them as expenses, your gross margin calculation is wrong, and you have no visibility into job profitability. Check your chart of accounts—every direct job cost should be under COGS.

Mistake number two: Not assigning costs to jobs. You enter a materials bill and forget to select the customer/job. That cost now shows up in your P&L but not in your job costing. Your overall numbers look right, but your job profitability is understated. This is why I recommend turning on the "Require customer on all expense transactions" rule for COGS accounts—it forces you to assign everything.

Mistake number three: Mixing personal and business transactions. You buy lunch with the company credit card. You pay a personal bill from the business account. These transactions are not business expenses. If you include them in your books, your P&L is wrong. Either don't mix accounts at all—which is ideal—or religiously code personal transactions to an Owner Draw account.

Mistake number four: Not reconciling regularly. If you only reconcile at year-end, you'll have 12 months of errors to untangle. I've seen contractors spend 40 hours cleaning up a year of unreconciled books. Do it monthly and it takes 30 minutes.

Mistake number five: Creating too many accounts or classes. Some contractors want to track everything separately: different accounts for every material type, classes for every job AND every crew AND every customer type. This complexity makes data entry painful and leads to inconsistent coding. Keep it simple. You can always add detail later—but complexity at the start kills your system.

Mistake number six: Entering deposits as income. When you collect a deposit from a customer, that's not revenue yet—you haven't done the work. It's a liability. Enter deposits as payments to a "Customer Deposits" liability account. When you invoice for the work, apply the deposit to that invoice. This keeps your revenue recognition accurate.

Mistake number seven: Ignoring the books because "my accountant handles it." Your accountant sees your books once a year. You should be looking at them weekly. QuickBooks is not just a tax record—it's a management tool. The contractors who use it as a management tool make better decisions and more money.`,
          keyPoints: [
            "COGS vs Operating Expense: Job costs are COGS, not expenses",
            "Always assign costs to jobs—unassigned costs break job costing",
            "Never mix personal and business—or rigorously code personal as Owner Draw",
            "Reconcile monthly, not annually—30 min/month vs 40 hours/year",
            "Customer deposits are liabilities, not income, until work is done"
          ]
        },
        {
          id: "qb3-l4",
          title: "Integrating QuickBooks with Your Workflow",
          duration: "7 min",
          transcript: `QuickBooks doesn't exist in isolation—it should integrate with your daily workflow and other tools. Let's talk about how to make that happen.

First, invoicing workflow. The best practice is: Complete work, create invoice same day, send invoice same day. Don't batch invoices weekly or monthly—that delays cash flow by days or weeks. QuickBooks makes this easy: you can create and email invoices from your phone using the QuickBooks mobile app. Job's done at 4 PM? Invoice sent by 4:15 PM.

For progress billing on larger jobs, set up recurring invoices or invoice templates. If your contract says you bill at 30%, 30%, 30%, 10%, create a template for each milestone. When you hit the milestone, you're ready to invoice immediately.

Second, bill payment workflow. Review bills weekly during your Friday routine. Set up bill pay through QuickBooks or link it to your bank's bill pay. Schedule payments to optimize cash flow—pay on the due date, not before, unless you're getting an early payment discount.

Third, time tracking integration. If you're not using QuickBooks Time, at minimum use a spreadsheet or time tracking app that your crews complete daily. Each day, they log: which job they worked on, how many hours. This data feeds your labor allocations.

Fourth, integrate with your estimating process. Your QuickBooks data should inform your estimates. If you know your actual labor cost per square foot of drywall from past jobs (thanks to job costing), you can estimate future jobs accurately. Pull job profitability reports before building estimates.

Fifth, consider add-ons and integrations. QuickBooks connects to many contractor tools: Receipt capture apps like HubDoc or Dext that scan receipts and enter them automatically. Estimating software that syncs jobs to QuickBooks. Time tracking apps beyond QuickBooks Time. Payment processing that deposits directly to QuickBooks.

The key is to reduce friction. The harder it is to enter data correctly, the more likely it gets entered wrong. Every integration that reduces steps improves data quality.

Finally, train your team. If you have office staff, they need to understand the chart of accounts, job structure, and coding rules. If they enter data wrong, your reports are useless. Spend time training them on the "why" behind the system, not just the mechanics.

That completes the QuickBooks Setup for Contractors course. Take your knowledge check, and if you pass, you'll earn your certificate. You now have a solid foundation for running QuickBooks in a way that actually helps you manage your business.`,
          keyPoints: [
            "Invoice same-day—don't batch and delay cash flow",
            "Use QuickBooks mobile for on-site invoicing",
            "Pay bills on due date unless early payment discount is offered",
            "Let job costing data inform your estimating process",
            "Consider integrations: receipt capture, time tracking, estimating software"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "qb3-q1",
          question: "How often should you reconcile your QuickBooks bank account?",
          options: ["Annually at tax time", "Quarterly", "Monthly", "Only when there's a problem"],
          correctAnswer: 2,
          explanation: "Reconcile monthly. Waiting longer creates compounding errors that take hours to untangle. Monthly reconciliation takes about 30 minutes."
        },
        {
          id: "qb3-q2",
          question: "When should you create and send invoices for completed work?",
          options: ["At month-end to batch them together", "Weekly on Fridays", "Same day the work is completed", "When you need cash flow"],
          correctAnswer: 2,
          explanation: "Invoice same-day. Every day you delay invoicing delays your cash collection. Use the QuickBooks mobile app to invoice from the job site."
        },
        {
          id: "qb3-q3",
          question: "How should customer deposits be recorded in QuickBooks?",
          options: ["As revenue in a COGS account", "As a payment to a Customer Deposits liability account", "As income in a revenue account", "As a credit to accounts receivable"],
          correctAnswer: 1,
          explanation: "Deposits are liabilities until you do the work. Record them to a Customer Deposits liability account, then apply to invoices when work is complete."
        },
        {
          id: "qb3-q4",
          question: "What should you do if you don't recognize a bank transaction in QuickBooks?",
          options: ["Delete it", "Guess and categorize it anyway", "Mark it for review and investigate later", "Ask your accountant at year-end"],
          correctAnswer: 2,
          explanation: "Never guess on transactions—this leads to inaccurate data. Mark unknown items for review and investigate while the transaction is still recent."
        },
        {
          id: "qb3-q5",
          question: "How often should the weekly bookkeeping routine be performed?",
          options: ["Monthly is fine", "Every Friday", "Only when you have time", "Every day"],
          correctAnswer: 1,
          explanation: "Do your weekly routine every Friday: reconcile bank feeds, enter bills, send invoices, review AR. This takes 1-2 hours and prevents month-end chaos."
        }
      ]
    }
  ]
};

// Cash Flow Mastery Course
export const cashFlowMastery: Course = {
  id: "cash-flow-mastery",
  title: "Cash Flow Mastery",
  slug: "cash-flow-mastery",
  description: "Take control of your construction company's cash flow: forecasting, collections, payment optimization, and surviving the growth paradox.",
  duration: "2 hours",
  level: "Intermediate",
  passingScore: 80,
  modules: [
    {
      id: "cf-module-1",
      number: 1,
      title: "Understanding Contractor Cash Flow",
      duration: "30 min",
      description: "Learn why cash flow is different for contractors and why profitable companies fail.",
      lessons: [
        {
          id: "cf1-l1",
          title: "Why Profitable Contractors Go Broke",
          duration: "7 min",
          transcript: `Welcome to Cash Flow Mastery. This course is about the single biggest killer of contracting businesses: running out of cash. And here's the uncomfortable truth—you can be profitable and still go broke.

Let me share a story I've seen too many times. A contractor has a great year. Revenue is up 30%. The P&L shows strong profits. They're busier than ever. Then, one day, they can't make payroll. Within weeks, they're out of business. What happened?

Cash flow happened. Or rather, the failure to manage it.

Here's the fundamental concept: Profit is an accounting measure. Cash is what's in your bank account. They're not the same thing, and they don't move at the same time.

For contractors, there's a structural gap between spending money and collecting money. You sign a job in January. You buy materials in February. You pay your crew in February, March, and April. You finish and invoice in April. You collect payment in June—maybe July if the customer is slow.

From February to June, you're spending money you haven't collected. Where does that money come from? Your working capital. Your savings. Your credit line. Your other jobs.

Now imagine you're growing. You signed three big jobs instead of one. You're buying three times the materials. Paying three times the labor. But your collections haven't caught up yet—you're still waiting on payments from jobs that aren't even done.

This is the growth paradox: the faster you grow, the more cash you need, even if you're profitable. Growth eats cash.

Eighty-two percent of contractor failures are cash flow failures. Not lack of work. Not poor craftsmanship. Not low prices. Cash flow. They simply ran out of money before the money came in.

This course will teach you to see cash flow problems before they become fatal. You'll learn to forecast, to accelerate collections, to slow payments strategically, and to build the buffer that lets you survive inevitable bumps. Let's start with understanding the contractor cash cycle.`,
          keyPoints: [
            "Profit is accounting; cash is what's in your bank—they're not the same",
            "Contractors spend money months before collecting payment",
            "The growth paradox: faster growth requires more cash, not less",
            "82% of contractor failures are cash flow failures",
            "Cash flow problems are survivable if you see them coming"
          ]
        },
        {
          id: "cf1-l2",
          title: "The Contractor Cash Cycle",
          duration: "8 min",
          transcript: `Every construction project follows a cash cycle. Understanding this cycle is the first step to controlling it.

The cycle has five phases. Phase one: You land the job. Hopefully, you collect a deposit—more on that later. Phase two: You mobilize. You buy materials, schedule crews, maybe rent equipment. Cash goes out. Phase three: You work. You pay your crew weekly. Subs invoice you. Cash keeps going out. Phase four: You invoice. You've finished the work (or a milestone) and send a bill. Now you wait. Phase five: You collect. The customer pays the invoice. Cash finally comes in.

Let's map this to a real timeline. Say you sign a $100,000 kitchen remodel on January 15. You collect a 10% deposit: $10,000 comes in. February 1, you order cabinets and materials—$25,000 goes out. February through April, you pay your crew—$30,000 goes out over those weeks. You pay your tile sub—$8,000. Other costs bring your total spend to $70,000.

April 15, the job is done. You invoice the remaining $90,000. Payment terms are net 30, so you expect payment around May 15. But the customer takes their time, submits their punch list, has a few questions. You actually collect on June 1.

From February 1 to June 1, you were negative on this job. You spent $60,000 out of pocket ($70,000 minus the $10,000 deposit) and waited four months to get it back—plus your profit.

Now calculate your float requirement. At peak, around April 15, you had $60,000 of your money in this job. That's cash that can't be used for anything else. If you don't have $60,000 available, you can't do this job.

What if you have three jobs like this running simultaneously? You might need $150,000 or more in float. That's your working capital requirement.

The cash cycle creates three numbers you must know. First, your average float per job: how much of your cash is tied up in a typical job at peak? Second, your average cycle time: from first dollar out to last dollar in, how many days? Third, your concurrent job capacity: given your working capital, how many jobs can you float at once?

If you know these numbers, you can plan. If you don't, you're gambling. Next, let's talk about working capital and how to calculate what you need.`,
          keyPoints: [
            "Five phases: Land job, Mobilize, Work, Invoice, Collect",
            "Cash goes out for weeks/months before coming back in",
            "Calculate 'float per job'—your cash tied up at peak",
            "Calculate 'cycle time'—days from first spend to final collection",
            "Your working capital determines how many jobs you can run concurrently"
          ]
        },
        {
          id: "cf1-l3",
          title: "Working Capital Requirements",
          duration: "8 min",
          transcript: `Working capital is your financial cushion—the money available to fund daily operations. For contractors, it's not optional; it's survival.

The formula is simple: Working Capital equals Current Assets minus Current Liabilities. Current Assets are things that can be converted to cash within a year: cash in the bank, accounts receivable, and work-in-progress. Current Liabilities are things due within a year: accounts payable, credit card balances, and the current portion of loans.

But knowing the formula isn't enough. You need to know how much working capital you need.

Here's the contractor-specific calculation. Start with your expected annual revenue. Let's say $1 million. Calculate your average cost ratio—the percentage of revenue that goes to direct costs. For most contractors, it's 60-70%. We'll use 65%, so direct costs are $650,000 per year.

Now estimate your average cycle time. From first spend to final collection, how many days? For residential, it might be 60-90 days. For commercial with retainage, it could be 120 days or more. Let's use 75 days.

Your working capital requirement is: Direct costs times cycle time divided by 365. That's $650,000 times 75 divided by 365, which equals roughly $134,000.

To run a million-dollar contracting business with a 75-day cash cycle, you need about $134,000 in working capital. If you have less, you'll run into cash crunches during busy periods.

But wait—this assumes everything goes smoothly. What if a customer is slow to pay? What if a job runs over? What if you land a big opportunity? You need a buffer.

The rule of thumb is: Take your calculated requirement and add 25% for safety. Our contractor needs $134,000 plus 25%, or about $168,000, to run their business safely.

Now here's the reality check. How much working capital do you actually have? Do the math: add up your current assets, subtract current liabilities. Is the number above your requirement? If not, you're undercapitalized, and every growth push increases your risk.

What if you're short? You have options. Build reserves by reinvesting profit instead of taking distributions. Secure a credit line—this adds to your available current assets. Reduce cycle time through faster billing and collection. Increase deposits to reduce how much of your money is in each job.

The contractors who survive long-term are the ones who build and maintain adequate working capital. It's not exciting. It's not visible. But it's the foundation of a stable business.`,
          keyPoints: [
            "Working Capital = Current Assets − Current Liabilities",
            "Requirement formula: (Annual Direct Costs × Cycle Time) ÷ 365",
            "Add 25% buffer for safety margin",
            "A $1M contractor with 75-day cycle needs ~$168K working capital",
            "Options if short: Build reserves, get credit line, reduce cycle time, increase deposits"
          ]
        },
        {
          id: "cf1-l4",
          title: "Cash Flow vs Profit: Seeing Both Pictures",
          duration: "7 min",
          transcript: `Too many contractors look at their P&L and think they understand their financial picture. They don't. The P&L tells you one thing—your profit. The Cash Flow Statement tells you something different—your cash.

Let's see this clearly with an example. Your P&L shows: Revenue $200,000, Cost of Goods Sold $130,000, Gross Profit $70,000, Overhead $45,000, Net Profit $25,000.

Looks great, right? $25,000 profit. But your bank account is down $10,000 from last month. How is that possible?

The Cash Flow Statement explains it. Start with Net Income: $25,000. Adjust for receivables: Accounts Receivable increased by $35,000, meaning you earned revenue you haven't collected. That's negative $35,000 to cash. Adjust for payables: Accounts Payable decreased by $5,000, meaning you paid down supplier balances. That's negative $5,000 to cash. Add depreciation: $5,000 (this was an expense on the P&L but not a cash outflow).

Cash from operations: $25,000 minus $35,000 minus $5,000 plus $5,000 equals negative $10,000.

You made $25,000 profit but your operating cash flow was negative $10,000. The profit is stuck in receivables—you haven't collected it yet.

This is why you need to look at both statements. The P&L tells you: Am I pricing correctly? Are my margins healthy? Am I profitable? The Cash Flow Statement tells you: Is profit becoming cash? Where is cash stuck? Will I have cash to operate?

For contractors, the cash flow statement is arguably more important in the short term. You can survive a quarter of low profits if you have cash. You cannot survive a quarter with no cash, even if you're profitable.

Build a habit of reviewing both monthly. Ask these questions: What was my net income? What was my change in cash? If they're very different, why? Where did my profit go—receivables, inventory, equipment?

You can create a simple cash flow review without a formal statement. Just look at: Bank balance at start of month, Bank balance at end of month, the difference. Then reconcile that difference to your profit by adjusting for major changes in receivables and payables.

If you track both profit and cash, you'll see problems coming with time to react. If you only track profit, you'll be blindsided. The next module teaches you how to forecast cash flow so you're never surprised.`,
          keyPoints: [
            "P&L shows profit; Cash Flow Statement shows actual cash movement",
            "Profit gets 'stuck' in receivables, inventory, and equipment purchases",
            "You can be profitable and cash-negative simultaneously",
            "Review both statements monthly: What was net income? What was cash change?",
            "Short-term, cash matters more than profit—you can't operate without cash"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "cf1-q1",
          question: "According to industry data, what percentage of contractor failures are due to cash flow problems?",
          options: ["25%", "50%", "65%", "82%"],
          correctAnswer: 3,
          explanation: "82% of contractor failures are attributed to cash flow problems—not lack of work, poor quality, or low prices. Cash flow management is critical to survival."
        },
        {
          id: "cf1-q2",
          question: "The 'growth paradox' for contractors means:",
          options: ["Growing too fast always leads to failure", "Faster growth requires MORE cash, not less", "You should never grow your business", "Growth automatically improves cash flow"],
          correctAnswer: 1,
          explanation: "The growth paradox means faster growth requires more cash. You're paying for more materials, labor, and overhead while waiting longer to collect on a larger revenue base."
        },
        {
          id: "cf1-q3",
          question: "A contractor has $1M annual revenue, 65% direct costs, and 90-day cycle time. What's their approximate working capital requirement?",
          options: ["$65,000", "$120,000", "$160,000", "$200,000"],
          correctAnswer: 2,
          explanation: "Working capital = (Direct Costs × Cycle Time) ÷ 365 = ($650,000 × 90) ÷ 365 = ~$160,000. Add 25% buffer for the recommended amount."
        },
        {
          id: "cf1-q4",
          question: "If your P&L shows $30,000 profit but your receivables increased by $40,000, your cash flow from operations is approximately:",
          options: ["+$70,000", "+$30,000", "-$10,000", "-$40,000"],
          correctAnswer: 2,
          explanation: "Increased receivables mean you earned revenue but didn't collect it. $30,000 profit − $40,000 tied up in receivables = −$10,000 operating cash flow."
        },
        {
          id: "cf1-q5",
          question: "What does 'float per job' refer to?",
          options: ["The profit margin on each job", "The amount of your cash tied up in a job at peak", "The time between signing and starting", "The customer's deposit amount"],
          correctAnswer: 1,
          explanation: "Float per job is how much of YOUR cash is tied up in a job at its peak point—after you've spent on materials and labor but before collecting final payment."
        }
      ]
    },
    {
      id: "cf-module-2",
      number: 2,
      title: "Cash Flow Forecasting",
      duration: "30 min",
      description: "Build a 13-week cash flow forecast that shows you problems before they happen.",
      lessons: [
        {
          id: "cf2-l1",
          title: "Why 13-Week Forecasting Works",
          duration: "7 min",
          transcript: `Cash flow forecasting sounds complicated, but it doesn't have to be. The 13-week rolling forecast is a simple, powerful tool that every contractor can use. Let me explain why it works.

Thirteen weeks is the sweet spot for several reasons. It's far enough ahead to see problems coming and take action. It's close enough that your estimates are reasonably accurate. And it aligns with a fiscal quarter, which is a natural business cycle.

If you only look one week ahead, you have no time to fix problems. By the time you see a cash shortage, it's too late. If you look six months ahead, your forecast becomes fiction—too many variables change. Thirteen weeks is actionable foresight.

The basic structure of a 13-week forecast is simple. You create a spreadsheet with columns for each of the next 13 weeks. Row one is your starting cash balance. Below that, you list all expected cash inflows: customer payments, deposits, other income. Below that, you list all expected cash outflows: payroll, materials, subcontractors, overhead expenses, loan payments, equipment purchases, tax payments, owner draws. At the bottom, you calculate ending cash for each week.

Each week becomes the starting point for the next week. Week 1 ending cash is Week 2 starting cash. This chain shows you exactly when cash is expected to dip and by how much.

Here's what this looks like in practice. Week 1 starting cash: $85,000. Expected inflows: $45,000 from customer payments. Expected outflows: $32,000 payroll, $15,000 materials, $8,000 overhead. Net change: negative $10,000. Ending cash: $75,000.

Week 2 starting cash: $75,000. And so on.

As you fill out the forecast, you might see Week 7 ending cash projected at negative $12,000. That's a problem—but you're seeing it six weeks in advance. You have time to accelerate a collection, delay a purchase, draw on a credit line, or adjust your plans.

That's the power: problems visible in advance. A cash crisis that's visible six weeks out is a planning problem. A cash crisis that hits you this Friday is an emergency. The 13-week forecast turns emergencies into planning problems.

In the next lesson, I'll walk you through building your first forecast step by step.`,
          keyPoints: [
            "13 weeks = far enough to see problems, close enough to be accurate",
            "Structure: Starting cash → + Inflows → − Outflows → Ending cash",
            "Each week's ending cash becomes next week's starting cash",
            "Forecast shows WHEN cash dips and by how much",
            "Problems visible 6 weeks out are manageable; Friday surprises are emergencies"
          ]
        },
        {
          id: "cf2-l2",
          title: "Building Your First 13-Week Forecast",
          duration: "8 min",
          transcript: `Let's build a 13-week cash flow forecast together. Open a spreadsheet—Excel, Google Sheets, whatever you're comfortable with.

Create your column headers. Column A will be row labels. Columns B through N will be Weeks 1 through 13. Put the date of the Monday that starts each week in the header.

Now set up your rows. Start with "Beginning Cash Balance." This is your actual bank balance at the start of Week 1.

Next section: Cash Inflows. Create rows for: Customer Collections (payments on invoices), New Deposits Received (deposits on new jobs), Other Income (interest, rebates, anything else). Add a row for "Total Inflows" that sums these.

Next section: Cash Outflows. Create rows for: Payroll (including taxes—when do they actually hit your bank?), Materials Payments (when are supplier bills due?), Subcontractor Payments, Equipment and Rentals, Overhead (rent, utilities, insurance—when are they due?), Loan Payments (exact due dates), Credit Card Payments (statement due dates), Tax Payments (quarterly estimates), Owner Draws (if you take regular distributions). Add a row for "Total Outflows."

Then add: "Net Cash Flow" (Total Inflows minus Total Outflows) and "Ending Cash Balance" (Beginning Cash plus Net Cash Flow).

Now let's fill it in. Week 1 Beginning Cash: look at your bank account right now. Let's say $72,000. For Customer Collections, look at your open invoices. What's due this week? What do you realistically expect to collect? Be conservative—if a customer is historically slow, don't assume they'll pay on time. Let's say $38,000.

Deposits: Are any new jobs starting that have deposit payments? Let's say $5,000.

Total Inflows: $43,000.

Now outflows. Payroll: What's your weekly payroll? Let's say $18,000. Materials: What bills are due this week? $12,000. Subcontractors: $8,000. Overhead due this week: $4,000. No loan payments this week.

Total Outflows: $42,000.

Net Cash Flow: $43,000 minus $42,000 equals positive $1,000.

Ending Cash: $72,000 plus $1,000 equals $73,000.

Week 2 Beginning Cash is $73,000. Repeat the process.

The key is to be specific about timing. When does payroll actually hit? What day do supplier bills auto-pay? When are quarterly taxes due? The forecast only works if you're specific about WHEN cash moves.

Fill out all 13 weeks. Yes, the later weeks will be estimates. That's fine. As each week passes, you update the forecast with actual numbers and roll forward another week. It's a living document, not a one-time exercise.`,
          keyPoints: [
            "Columns = weeks (13 total); Rows = cash categories",
            "Inflows: Collections, Deposits, Other Income",
            "Outflows: Payroll, Materials, Subs, Overhead, Loans, Taxes, Draws",
            "Be specific about WHEN cash moves, not just amounts",
            "Update weekly with actuals and roll forward—it's a living document"
          ]
        },
        {
          id: "cf2-l3",
          title: "Forecasting Inflows Accurately",
          duration: "8 min",
          transcript: `The accuracy of your cash forecast depends heavily on how well you predict inflows. Most contractors are too optimistic. Let's talk about how to forecast collections realistically.

First, know your customers' payment patterns. Some customers pay in 15 days like clockwork. Some take 60 days no matter what the terms say. Some pay only after multiple follow-ups. Track your actual collection data by customer. When you forecast their payments, use their actual pattern, not your invoice terms.

Second, don't count on invoices that haven't been sent. If a job is almost done and you plan to invoice next week, put that collection in Week 5 or 6 (assuming 30-day terms), not Week 2. Be realistic about the sequence: finish work, invoice, customer processes it, payment arrives.

Third, apply an uncertainty discount. If you have $100,000 in invoices that are due over the next 4 weeks, don't forecast $100,000 in collections. Assume 85-90% will come in on time. Some customers will be late. Some invoices will have disputes. Some will slip.

Let me show you a collection forecasting method. Start with your Accounts Receivable aging report. Category one: Invoices due this week—forecast 95% collection, because these are the ones customers have had time to process. Category two: Invoices due in 1-2 weeks—forecast 85% of on-time payment. Category three: Invoices due in 3-4 weeks—forecast 75% on-time, because further out is less certain. Category four: Invoices not yet sent—forecast collection based on when you'll realistically invoice plus the customer's typical payment cycle.

Another factor: seasonality and cycles. Do your customers have payroll cycles that affect when they cut checks? Do they pay faster at year-end to use budget? Slower in summer when decision-makers vacation? These patterns affect your forecast.

Deposits are usually more reliable than collections because they happen before work starts. When you sign a contract with a deposit, you can forecast that deposit with high confidence for the specific week you expect the signed contract back.

Finally, have a contingency plan. In your forecast, create a row for "Contingent Inflows"—money you could pull in if you needed to. This might be: expediting collection calls on aged receivables, offering a small discount for early payment, or drawing on your credit line. You're not forecasting these as certain inflows, but knowing you have levers to pull if Week 7 looks tight.`,
          keyPoints: [
            "Use actual customer payment patterns, not invoice terms",
            "Don't count invoices that haven't been sent yet",
            "Apply an uncertainty discount: 85-90% of invoiced amounts, not 100%",
            "Consider customer payment cycles and seasonal patterns",
            "Know your contingent inflows—levers you can pull if cash gets tight"
          ]
        },
        {
          id: "cf2-l4",
          title: "What to Do When the Forecast Shows Trouble",
          duration: "7 min",
          transcript: `The whole point of forecasting is to see trouble before it arrives. So what do you do when your forecast shows a cash shortage in Week 7?

First, don't panic. You have six weeks to fix it. That's the gift of forecasting. Take a breath and work the problem systematically.

Start with the inflow side. Can you accelerate collections? Call customers with outstanding invoices. Send reminder emails. Offer a 2% discount for payment within 10 days. Move some of that Week 8 expected cash to Week 6.

Can you collect deposits on new work? If you're signing new jobs, get larger deposits. Instead of 10%, ask for 25% or 30%. Frame it as protecting both parties and ensuring material availability.

Can you invoice sooner? If you're waiting to invoice until a job is 100% complete, can you do progress billing? Bill for the 75% that's done now and bill the rest later.

Now the outflow side. Can you delay payments? If a supplier bill is due in Week 7, can you push it to Week 9? Many suppliers will grant payment term extensions if you ask proactively and have good history. Call them before the bill is due, not after.

Can you defer purchases? If you planned to buy equipment in Week 6, can it wait until Week 9 when cash is stronger? Timing purchases to cash flow is smart management.

Can you reduce discretionary spending? Owner draws, bonus payments, nice-to-have purchases—can these wait a few weeks?

What about your credit line? If you have a line of credit, now's the time to draw on it. That's what it's for—short-term working capital gaps. Don't wait until you're desperate; draw when you see the gap coming.

If the gap is larger than these measures can cover, you have a bigger issue. The forecast is telling you that your business model has a cash problem—maybe you're growing too fast, or your payment terms are too generous, or your margins are too thin. These are strategic problems that take longer to fix.

The weekly discipline is: Update your forecast every Monday. Compare last week's actual to the forecast—where were you wrong? Roll the forecast forward another week. Check if any weeks now show trouble. Take action early.

This discipline transforms cash management from reactive to proactive. Problems become visible with time to solve them. That's Cash Flow Mastery.`,
          keyPoints: [
            "Seeing trouble 6 weeks out gives you time to fix it",
            "Inflow levers: Accelerate collections, increase deposits, invoice earlier",
            "Outflow levers: Delay payments, defer purchases, reduce discretionary spend",
            "Use credit lines proactively when you see gaps—don't wait until desperate",
            "Update forecast weekly: compare actual vs forecast, roll forward, check for trouble"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "cf2-q1",
          question: "Why is 13 weeks the recommended forecast horizon for contractors?",
          options: ["It matches the fiscal year", "It's far enough to see problems, close enough to be accurate", "It's the IRS requirement", "It matches payroll cycles"],
          correctAnswer: 1,
          explanation: "13 weeks is the sweet spot: far enough ahead to see problems and take action (unlike 1 week), but close enough that estimates are reasonably accurate (unlike 6 months)."
        },
        {
          id: "cf2-q2",
          question: "When forecasting customer collections, you should:",
          options: ["Assume 100% will pay on the invoice due date", "Use actual customer payment patterns, not just invoice terms", "Only count payments that have already been received", "Double the expected amount to be safe"],
          correctAnswer: 1,
          explanation: "Use actual customer payment patterns. Some customers always pay in 15 days; others always take 60. Base your forecast on reality, not optimism."
        },
        {
          id: "cf2-q3",
          question: "What's an appropriate 'uncertainty discount' to apply to forecasted collections?",
          options: ["Expect 100% of invoiced amounts", "Expect 85-90% of invoiced amounts", "Expect 50% of invoiced amounts", "Expect 25% of invoiced amounts"],
          correctAnswer: 1,
          explanation: "Expect 85-90% of invoiced amounts to collect on time. Some customers will be late, some invoices will have disputes. Being conservative prevents surprises."
        },
        {
          id: "cf2-q4",
          question: "Your forecast shows a $15,000 cash shortage in Week 8. What should you do first?",
          options: ["Panic and stop taking new work", "Wait until Week 7 to see if it resolves itself", "Work systematically through inflow and outflow levers", "Immediately close the business"],
          correctAnswer: 2,
          explanation: "You have time—that's the point of forecasting. Work systematically: Can you accelerate collections? Delay payments? Get larger deposits? You have 7 weeks to solve a $15,000 gap."
        },
        {
          id: "cf2-q5",
          question: "How often should you update your 13-week cash flow forecast?",
          options: ["Monthly", "Weekly", "Daily", "Annually"],
          correctAnswer: 1,
          explanation: "Update weekly. Compare last week's actual vs forecast, roll the forecast forward another week, and check for any new trouble spots. This keeps the forecast accurate and actionable."
        }
      ]
    },
    {
      id: "cf-module-3",
      number: 3,
      title: "Accelerating Collections",
      duration: "30 min",
      description: "Get paid faster with proven strategies for invoicing, payment terms, and collections.",
      lessons: [
        {
          id: "cf3-l1",
          title: "Optimizing Your Payment Terms",
          duration: "7 min",
          transcript: `Your payment terms set the baseline for how long you'll wait to get paid. Let's optimize them.

Most contractors default to "Net 30"—payment due 30 days after invoice. But where did that come from? It's just tradition. There's nothing magical about 30 days. You can set whatever terms serve your business.

Consider this: If you change from Net 30 to Net 15, you get paid 15 days faster on every invoice. For a contractor doing $1 million annually, that's roughly $40,000 in cash that moves from receivables to your bank account. That's $40,000 more in working capital—from changing a few words on your invoices.

Here's how to approach payment terms. For residential customers, shorter terms are expected. Net 15 or even "Due upon receipt" is reasonable. Homeowners aren't running complex accounting departments. They can pay quickly if you make it easy.

For commercial customers, you may have less flexibility—they have their own payment processes. But you can still negotiate. Don't just accept "Net 60" because that's what they offer. Counter with Net 30. Ask what it would take to get Net 15.

Progress payments are essential for larger jobs. Don't wait until a job is 100% complete to invoice. Break it into milestones: 30% deposit at signing, 30% at rough completion, 30% at substantial completion, 10% at final walk-through. This keeps you funded throughout the project.

Deposits are your best friend. A 25-30% deposit at signing means you start every job with a positive cash position. You've collected money before spending anything. This is powerful.

For service and repair work, collect at completion. You're there, the work is done, collect before you leave. Many contractors lose days or weeks by invoicing service work instead of collecting on the spot.

One more thing: state your terms clearly and consistently. If your invoice says "Net 15," your contract should say Net 15. Your verbal agreements should match. When terms are inconsistent, customers take the longest option.

The key insight: Payment terms are negotiable at the start of a relationship. They're very hard to change later. Set them right from the beginning.`,
          keyPoints: [
            "Net 30 is tradition, not law—you can set shorter terms",
            "Changing Net 30 to Net 15 accelerates ~$40K cash on $1M revenue",
            "Residential can be Net 15 or 'Due upon receipt'",
            "Progress payments on larger jobs: 30%/30%/30%/10% is a good structure",
            "Collect service/repair work on site—don't invoice and wait"
          ]
        },
        {
          id: "cf3-l2",
          title: "Invoicing for Speed",
          duration: "8 min",
          transcript: `How and when you invoice affects how fast you get paid. Let's optimize your invoicing process.

Rule one: Invoice immediately. The moment work is complete—or a milestone is reached—invoice that day. Not tomorrow. Not Friday. Today. Every day you delay invoicing is a day added to your collection cycle. If you invoice a week late, you've already added 7 days to when you'll get paid.

Use mobile invoicing. QuickBooks, Square, FreshBooks—they all have mobile apps. Create and send invoices from the job site. Job's done at 2 PM? Invoice sent by 2:15 PM. No excuses about waiting until you get back to the office.

Rule two: Make invoices crystal clear. Confusion delays payment. Your invoice should include: Clear description of work completed (not "Services rendered" but "Kitchen remodel - Phase 2: Plumbing rough-in and electrical complete"). Reference to contract or proposal number. The amount due and what it covers. Due date in bold, prominent position. Payment methods accepted and instructions.

Rule three: Remove friction from payment. The easier you make it to pay, the faster people pay. Accept multiple payment methods: checks, credit cards, ACH bank transfers. Include a "Pay Now" button if your invoicing software supports it. Provide your bank details for ACH transfer. Accept credit cards even though there's a fee—a 3% fee is worth it if it gets you paid 20 days faster.

Rule four: Send invoices to the right person. In commercial work, sending an invoice to your project contact doesn't mean it gets to accounts payable. Get the AP contact and process upfront. Know what approvals are needed. Send invoices to both your contact and AP. Follow their process.

Rule five: Confirm receipt. Email invoices and request a read receipt. Or call the day after sending: "Hi, just confirming you received the invoice I sent yesterday for the Johnson project. Is there anything you need from me to process it?" This does two things: confirms they have it and surfaces any issues immediately.

Many contractors are uncomfortable asking for money. Get over it. You did the work. You deserve to be paid. Professional follow-up isn't pushy; it's competent.`,
          keyPoints: [
            "Invoice the same day work is complete—every day of delay extends collection",
            "Use mobile invoicing from the job site",
            "Make invoices crystal clear: description, reference, due date, payment instructions",
            "Accept multiple payment methods including credit cards despite fees",
            "Confirm invoice receipt—call or email the day after sending"
          ]
        },
        {
          id: "cf3-l3",
          title: "The Collection Process",
          duration: "8 min",
          transcript: `Even with great terms and fast invoicing, some customers will pay late. A systematic collection process ensures you get paid without destroying relationships.

First, let's set the framework. Collection isn't about being aggressive. It's about being professional and consistent. Customers who know you follow up systematically pay faster than customers who know you let things slide.

Here's a proven collection timeline. Before the due date, send a reminder. Seven days before payment is due, send a friendly reminder: "Your invoice for the Smith Kitchen project is due on April 15. Please let me know if you have any questions." This prevents "I forgot" delays.

On the due date, if not paid, send an email: "Invoice #1234 was due today. Please remit payment at your earliest convenience." Keep it factual, not emotional.

Three days past due: A phone call. "Hi, I'm following up on invoice #1234 that was due a few days ago. Is there an issue we can help resolve, or can I get an expected payment date?" Often there's a simple explanation—they need a receipt, or they lost the invoice.

Seven days past due: Another phone call plus an email. "I haven't received payment on invoice #1234. Please let me know when I can expect it." Ask for a specific date.

Fourteen days past due: Formal written notice. "Invoice #1234 is now two weeks overdue. Payment is required within 7 days. If there are issues, please contact me immediately."

Thirty days past due: Final notice. "This is a final notice for invoice #1234. If payment isn't received within 5 days, we'll need to evaluate our options for recovery." This might mean collections, liens, legal action—whatever's appropriate.

Throughout this process, document everything. Log your calls, save your emails, note any promises made. If it ever goes to collections or court, you need this documentation.

Two key principles: Be consistent—apply the same process to everyone, every time. And be professional—never get emotional, never make threats you can't follow through on, never damage the relationship unnecessarily.

Most customers aren't trying to stiff you. They're busy, disorganized, or have a legitimate issue. Your job is to be professionally persistent until the issue is resolved and you're paid.`,
          keyPoints: [
            "Collection is about being professional and consistent, not aggressive",
            "Timeline: Reminder before due, follow-up day of, call at 3 days, escalate weekly",
            "Always ask for a specific payment date when following up",
            "Document everything—calls, emails, promises—for potential escalation",
            "Be consistent (same process for everyone) and professional (no emotion)"
          ]
        },
        {
          id: "cf3-l4",
          title: "Early Payment Incentives and Late Payment Penalties",
          duration: "7 min",
          transcript: `You can use financial incentives to motivate customers to pay faster. Let's talk about early payment discounts and late payment penalties.

Early payment discounts work. The classic is "2/10 Net 30"—which means a 2% discount if paid within 10 days, otherwise full amount due in 30 days. From the customer's perspective, they save 2% for paying 20 days early. From your perspective, you get cash 20 days faster.

Is the 2% discount worth it? Let's do the math. Getting paid 20 days early on a $10,000 invoice means $10,000 in your account sooner. The discount costs you $200. If your alternative is drawing on a 10% credit line for 20 days, that would cost you about $55 in interest. So you're paying $200 to get cash that would cost $55 on your line.

On paper, the discount costs more. But in practice, it works because: Many customers will take the discount, speeding your overall cash cycle. The customers who pay fast become better, more reliable customers. And you avoid collection hassles and uncertainty.

My recommendation: Offer the discount, but don't make it automatic. Offer 1-2% for payment within 10 days on your larger invoices or for customers who have good payment history. For smaller invoices or new customers, standard terms may be fine.

Now, late payment penalties. You can add language like "1.5% per month on past-due balances" to your invoices. This communicates seriousness about timely payment.

But here's the reality: Late fees rarely get collected. Customers dispute them, relationships get damaged, and pursuing a 1.5% fee isn't worth the hassle. Late fee language is more useful as a deterrent than as actual revenue.

More effective than late fees: Communicate consequences. "We prioritize scheduling for customers who pay on time." "Deposit requirements increase for accounts with payment issues." "We can't start your next project until the outstanding balance is resolved."

These aren't threats—they're reasonable business policies. And they're more motivating than a 1.5% fee that might never get collected.

The best collection strategy: Make it easy and rewarding to pay on time, and create real consequences for paying late. Carrots and sticks, applied professionally.`,
          keyPoints: [
            "2/10 Net 30 means 2% discount for payment in 10 days vs full amount in 30",
            "Early payment discounts speed cash even if they cost more than credit line interest",
            "Late fee language deters late payment but fees are rarely collected",
            "More effective: real consequences (scheduling priority, deposit requirements)",
            "Make it easy to pay on time, create real consequences for paying late"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "cf3-q1",
          question: "What's the most important invoicing rule for improving collections?",
          options: ["Send all invoices on the first of the month", "Invoice the same day work is completed", "Wait until the customer confirms satisfaction", "Invoice quarterly for simplicity"],
          correctAnswer: 1,
          explanation: "Invoice immediately when work is complete. Every day of delay adds to your collection cycle. Use mobile invoicing to send from the job site."
        },
        {
          id: "cf3-q2",
          question: "What does '2/10 Net 30' mean?",
          options: ["2% deposit required, due in 10-30 days", "2% discount if paid in 10 days, otherwise due in 30", "Pay 2 invoices within 10 days, get 30 days free", "2% interest after 10 days, due in 30 days"],
          correctAnswer: 1,
          explanation: "2/10 Net 30 offers a 2% discount for payment within 10 days; otherwise, the full amount is due in 30 days. It incentivizes early payment."
        },
        {
          id: "cf3-q3",
          question: "When should you first follow up on an unpaid invoice?",
          options: ["30 days after due date", "When you need the money", "Send a reminder 7 days BEFORE due date", "Only if the customer complains"],
          correctAnswer: 2,
          explanation: "Send a reminder before the due date—7 days is ideal. This prevents 'I forgot' delays and shows you track payments professionally."
        },
        {
          id: "cf3-q4",
          question: "Late payment fee language on invoices is most useful as:",
          options: ["A major revenue source", "A deterrent that signals seriousness", "A legal requirement", "A way to negotiate discounts"],
          correctAnswer: 1,
          explanation: "Late fees are rarely collected in practice, but the language deters late payment by signaling that you take payment seriously."
        },
        {
          id: "cf3-q5",
          question: "For service and repair work, when is the best time to collect payment?",
          options: ["Net 30 after invoicing", "On site when the work is complete", "After the customer's next project", "At year-end for tax purposes"],
          correctAnswer: 1,
          explanation: "Collect service/repair work on site when complete. You're there, the work is done—collect before leaving rather than invoicing and waiting."
        }
      ]
    },
    {
      id: "cf-module-4",
      number: 4,
      title: "Building Cash Reserves",
      duration: "30 min",
      description: "Build the cash cushion that protects your business and enables growth.",
      lessons: [
        {
          id: "cf4-l1",
          title: "How Much Cash Reserve Do You Need?",
          duration: "7 min",
          transcript: `A cash reserve is money you set aside for emergencies, opportunities, and cash flow timing. It's your safety net. Let's figure out how much you need.

The baseline recommendation is 3 months of operating expenses. If your overhead is $30,000 per month—rent, insurance, administrative payroll, minimum owner draw—your baseline reserve is $90,000.

But contractors have extra considerations. You also need to fund active jobs. If your average float per job is $50,000 and you run three concurrent jobs, that's $150,000 tied up in work-in-progress. You can't use reserve cash for that—it's already spoken for.

So think of it this way: You need three months of overhead ($90,000 in our example) PLUS your working capital for active jobs ($150,000) PLUS a buffer for growth or emergencies (let's say $30,000). Total: $270,000.

That sounds like a lot, and it is. Most contractors don't have that much cash on hand. But here's the key insight: You don't need it all in savings. You need it accessible.

This is where a line of credit comes in. A $100,000 line of credit counts toward your accessible reserves. If you have $170,000 in cash plus a $100,000 line, you have $270,000 accessible. You meet the need.

Here's how I recommend structuring your reserves. First layer: 2-4 weeks of payroll in your operating checking account. This covers immediate obligations and prevents overdrafts. Second layer: 1-2 months of overhead in a savings account. This is your primary emergency fund—accessible within a day but not mixed with operating cash. Third layer: A credit line equal to 1-2 months of overhead, unused and available. This is your backup for larger emergencies or opportunities.

This layered approach gives you quick access to small amounts, same-day access to moderate amounts, and credit access to large amounts. Each layer protects the next.

What about excess cash beyond these reserves? That's a good problem to have. You can invest in equipment that improves productivity, pay down expensive debt, fund growth by hiring or marketing, or increase owner distributions since you've earned it.

But don't skip the reserves to fund those things. Build the safety net first, then use excess cash for growth.`,
          keyPoints: [
            "Baseline: 3 months of operating expenses as reserve",
            "Contractors also need working capital for active jobs—separate from reserves",
            "You need reserves ACCESSIBLE, not necessarily all in savings—credit line counts",
            "Layer it: 2-4 weeks payroll in checking, 1-2 months in savings, 1-2 months credit line",
            "Build reserves first, then use excess cash for growth or distributions"
          ]
        },
        {
          id: "cf4-l2",
          title: "Building Reserves on Tight Margins",
          duration: "8 min",
          transcript: `"I'd love to have reserves, but there's never any cash left over." I hear this constantly. Let's talk about how to build reserves even when margins are tight.

First, accept this truth: Reserves won't build themselves. You have to make them a priority, just like payroll or rent. If you wait until money is "left over," there will never be any. Treat reserve building as a non-negotiable expense.

The simplest method is the percentage method. Decide on a percentage of revenue—3% is a good starting point—and transfer that amount to reserves before you spend anything else. If you collect $50,000 this week, transfer $1,500 to a savings account before paying bills.

"But I need that money for payroll!" Maybe. But maybe you're also spending money on things that could wait. The discipline of transferring first forces you to scrutinize other expenses.

Let's look at painless places to find reserve money. First, price increases. If you raise prices 3%, that 3% can go entirely to reserves without affecting your lifestyle at all. You just keep operating as before, and the extra flows to savings. On $1 million revenue, that's $30,000 per year to reserves.

Second, cut recurring expenses you don't notice. Audit your subscriptions, memberships, and recurring charges. Most contractors have $200-500 per month in forgotten or unused subscriptions. Cancel them and redirect to reserves.

Third, collect deposits and hold them. When you collect a deposit, don't immediately spend it on materials for that job. Keep it in a separate account as long as possible. Time the material purchase to when you actually need the materials. This creates a float that, over time, becomes a de facto reserve.

Fourth, tax overpayment refunds. If you get a tax refund, put it in reserves. This is found money—don't treat it as a windfall to spend.

Fifth, profit windfalls. A job comes in way under cost and you pocket an extra $10,000? Put half in reserves. Bonuses and windfalls are the fastest way to build a cushion.

The key mindset shift: Think of reserves as "first dollar" spending, not "last dollar" saving. Pay yourself (into reserves) before you pay everyone else. The business will adjust to having slightly less available, and you'll have a safety net growing month by month.`,
          keyPoints: [
            "Reserves won't build themselves—treat them as non-negotiable, like payroll",
            "Percentage method: Transfer 3-5% of collections to savings FIRST",
            "Raise prices 3% and direct the increase entirely to reserves",
            "Cut forgotten subscriptions ($200-500/month is common)",
            "Deposits: Collect them and hold them, time material purchases to actual need"
          ]
        },
        {
          id: "cf4-l3",
          title: "Lines of Credit: Your Cash Flow Safety Valve",
          duration: "8 min",
          transcript: `A business line of credit is one of the most important tools for contractor cash management. Let me explain what it is, how to get one, and how to use it right.

A line of credit is borrowing capacity that you can access when needed. Unlike a term loan where you get a lump sum, a line lets you draw only what you need, when you need it. You pay interest only on what you've drawn. It's like a credit card, but with much lower interest rates.

For contractors, a line of credit serves one primary purpose: smoothing out cash flow timing. When you're waiting on a big payment but payroll is due, you draw on the line. When the payment arrives, you pay down the line. It bridges the gap.

Here's the critical rule: Get the line BEFORE you need it. Banks lend to businesses that don't desperately need money. If you apply during a cash crisis, you'll be denied. Apply when business is stable, your books look good, and you have time to shop for the best terms.

How much line should you seek? 10-15% of annual revenue is a good target for contractors. If you do $1 million per year, a $100,000-150,000 line gives you flexibility for most timing gaps.

What will the bank want to see? At least two years of business tax returns. Recent financial statements (P&L, balance sheet). Often a personal guarantee from the owner. Good personal credit (above 680, ideally above 720). Evidence of consistent revenue and profitability.

Shop multiple banks. Your relationship bank might give you an easy approval, but their rates might be higher. Online lenders like Fundbox or BlueVine offer faster approval but often higher rates. SBA-backed lines offer good terms but slower approval.

How to use the line correctly: Only draw for true working capital needs—payroll, materials, timing gaps. Never draw to fund losses or lifestyle. Pay it down as quickly as possible when cash comes in. Keep utilization below 50% most of the time—if you're constantly maxed out, you've got a bigger problem.

Monitor your line usage as a health metric. If you used to draw occasionally and now you're drawn constantly, something changed. Your margins might have slipped, or your collections might have slowed. The line is telling you something.

One more thing: Renew your line annually before it expires. Banks sometimes non-renew lines without warning. Stay ahead of it by starting the renewal conversation 60 days early.`,
          keyPoints: [
            "Line of credit = borrowing capacity you draw when needed, repay when you can",
            "Get the line BEFORE you need it—banks don't lend to desperate businesses",
            "Target: 10-15% of annual revenue ($100K-150K on $1M revenue)",
            "Only draw for working capital needs, pay down quickly, keep utilization under 50%",
            "Monitor line usage as a health metric—constant draws indicate a bigger problem"
          ]
        },
        {
          id: "cf4-l4",
          title: "Seasonal Cash Planning",
          duration: "7 min",
          transcript: `Most contracting businesses have seasonality. Certain months are busy and cash-rich; others are slow and cash-hungry. Planning for this cycle is essential.

First, know your pattern. Look at the last three years of monthly revenue. When are your strong months? When are your weak months? For many contractors, spring and summer are busy, while late fall and winter are slow. But it varies—HVAC contractors are busy when it's hot or cold, not temperate.

Map your cash needs against this pattern. During busy months, you need more working capital to fund more jobs. During slow months, you need reserves to cover fixed costs without revenue.

Here's a planning framework. Identify your two or three strongest cash months—maybe June through August. These are your "storage" months. Identify your two or three weakest cash months—maybe December through February. These are your "draw" months.

During storage months, aggressively build reserves. If you normally transfer 3% of collections, transfer 5% or more during your strong months. If you have profits to distribute, take smaller draws and leave more in the business. This is harvest time—you're storing for winter.

During draw months, you'll likely spend from reserves. That's fine. Plan for it. If you know you'll need $30,000 from reserves to get through January and February, have $30,000 in reserves by late November.

Other seasonal considerations: Pay annual expenses during strong months. If insurance premiums, tax prepayments, or large equipment purchases can be timed, time them for your strong months when cash is flush.

Build a "slow season" expense budget. Know exactly what you need to get through a slow month with minimal revenue. Rent, utilities, insurance, minimum payroll, essential overhead. If that's $25,000, you know your monthly floor.

Adjust work flow in advance. As your busy season ends, tighten up: reduce discretionary spending, defer non-essential purchases, collect aggressively. Don't get caught celebrating the end of busy season while cash bleeds out.

Finally, use slow season productively. Train your team, maintain equipment, plan for next year, work on your business instead of in it. Slow months aren't dead months if you use them strategically.

That completes Cash Flow Mastery. Take your knowledge check, and if you pass, you'll earn your certificate. You now have the tools to forecast, accelerate, and protect your cash flow.`,
          keyPoints: [
            "Know your pattern: analyze 3 years of monthly revenue for seasonal peaks and valleys",
            "Storage months: build reserves aggressively during strong cash months",
            "Draw months: plan to spend reserves during slow months—that's what they're for",
            "Time annual expenses (insurance, taxes, equipment) to strong cash months",
            "Use slow season productively: training, maintenance, planning"
          ]
        }
      ],
      knowledgeCheck: [
        {
          id: "cf4-q1",
          question: "What's the baseline cash reserve recommendation for contractors?",
          options: ["1 month of revenue", "3 months of operating expenses (plus working capital for jobs)", "6 months of payroll only", "Whatever is left after expenses"],
          correctAnswer: 1,
          explanation: "The baseline is 3 months of operating expenses, but contractors also need working capital for active jobs and a buffer for growth. Total accessible reserves (including credit lines) should cover all three."
        },
        {
          id: "cf4-q2",
          question: "When should you apply for a business line of credit?",
          options: ["During a cash crisis when you need it most", "Before you need it, when business is stable", "After you've exhausted all other options", "Only when banks are offering promotions"],
          correctAnswer: 1,
          explanation: "Get the line BEFORE you need it. Banks lend to stable businesses, not desperate ones. Apply when your books look good and you have time to shop for best terms."
        },
        {
          id: "cf4-q3",
          question: "The 'percentage method' for building reserves means:",
          options: ["Investing a percentage in stocks", "Transferring a percentage of collections to savings FIRST, before spending", "Holding a percentage of accounts receivable", "Discounting invoices by a percentage"],
          correctAnswer: 1,
          explanation: "Transfer a set percentage (3-5%) of collections to reserves before paying any other bills. This treats reserves as a non-negotiable expense."
        },
        {
          id: "cf4-q4",
          question: "What should you do during your 'storage' (strong cash) months?",
          options: ["Increase owner draws to reward yourself", "Aggressively build reserves and reduce debt", "Relax your collection efforts", "Take on debt for equipment purchases"],
          correctAnswer: 1,
          explanation: "Strong cash months are for building reserves. Transfer more to savings, pay down debt, and prepare for slower months ahead."
        },
        {
          id: "cf4-q5",
          question: "If you're constantly drawing on your line of credit, it indicates:",
          options: ["You're using the line correctly", "Your business has a deeper cash flow problem", "Banks will increase your limit", "You should apply for another line"],
          correctAnswer: 1,
          explanation: "Constant line usage indicates something's wrong—margins may have slipped, collections slowed, or you're undercapitalized. The line should be for occasional timing gaps, not constant reliance."
        }
      ]
    }
  ]
};

// Course catalog
export const allCourses: Course[] = [
  contractorFinanceFundamentals,
  quickbooksSetupForContractors,
  cashFlowMastery
];

// Helper to find course by slug
export function getCourseBySlug(slug: string): Course | undefined {
  return allCourses.find(course => course.slug === slug);
}

// Helper to get total questions count
export function getTotalQuestions(course: Course): number {
  return course.modules.reduce((total, module) => total + module.knowledgeCheck.length, 0);
}

// Helper to get total lessons count
export function getTotalLessons(course: Course): number {
  return course.modules.reduce((total, module) => total + module.lessons.length, 0);
}
