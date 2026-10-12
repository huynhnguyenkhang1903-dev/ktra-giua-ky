// Dữ liệu đề thi TOEIC Reading Test 07 (ETS 2019) chuẩn 100 câu hỏi
const EXAM_DATA = {
  "title": "TOEIC Reading Test 07",
  "duration": 75,
  "total_questions": 100,
  "part5": [
    {
      "num": 101,
      "text": "If ------- are not satisfied with an item, return it for a full refund within 30 days of purchase.",
      "a": "you",
      "b": "your",
      "c": "yours",
      "d": "yourself",
      "ans": "A"
    },
    {
      "num": 102,
      "text": "The location of next month's online gaming forum is yet to be -------.",
      "a": "concluded",
      "b": "prevented",
      "c": "invited",
      "d": "decided",
      "ans": "D"
    },
    {
      "num": 103,
      "text": "Guests were ------- with the table decorations for the company banquet.",
      "a": "impressive",
      "b": "impressed",
      "c": "impressing",
      "d": "impressively",
      "ans": "B"
    },
    {
      "num": 104,
      "text": "The Shubert Company is ------- effective at helping power plants reduce their carbon dioxide emissions.",
      "a": "once",
      "b": "far",
      "c": "early",
      "d": "very",
      "ans": "D"
    },
    {
      "num": 105,
      "text": "Mr. Hodges ------- that volunteers sign up to assist with the Hannock River cleanup by Friday.",
      "a": "requesting",
      "b": "to be requested",
      "c": "requests",
      "d": "to request",
      "ans": "C"
    },
    {
      "num": 106,
      "text": "Last year, the Daejeon English News ------- the number of readers by adding a digital subscription option.",
      "a": "needed",
      "b": "increased",
      "c": "joined",
      "d": "asked",
      "ans": "B"
    },
    {
      "num": 107,
      "text": "Before the updated design can go into -------, it must be approved by management.",
      "a": "product",
      "b": "producer",
      "c": "productive",
      "d": "production",
      "ans": "D"
    },
    {
      "num": 108,
      "text": "The economic development summit will be held ------- the Xi'an Trade Tower on September 22.",
      "a": "to",
      "b": "at",
      "c": "down",
      "d": "of",
      "ans": "B"
    },
    {
      "num": 109,
      "text": "Inclement weather was ------- responsible for the low turnout at Saturday's Exton Music Festival.",
      "a": "largely",
      "b": "large",
      "c": "largest",
      "d": "larger",
      "ans": "A"
    },
    {
      "num": 110,
      "text": "Our most recent survey was sent to clients just last week, ------- it is too soon to send another one.",
      "a": "when",
      "b": "since",
      "c": "so",
      "d": "finally",
      "ans": "C"
    },
    {
      "num": 111,
      "text": "------- necklace that is shipped from Gillis Designers is given a thorough quality check.",
      "a": "Whenever",
      "b": "Also",
      "c": "All",
      "d": "Each",
      "ans": "D"
    },
    {
      "num": 112,
      "text": "Ms. Valdez' sales numbers are good ------- for her to be considered for the employee-of-the-month award.",
      "a": "forward",
      "b": "even",
      "c": "ahead",
      "d": "enough",
      "ans": "D"
    },
    {
      "num": 113,
      "text": "Aaron Park's new book features photographs of homes designed and built by the homeowners -------.",
      "a": "itself",
      "b": "himself",
      "c": "themselves",
      "d": "ourselves",
      "ans": "C"
    },
    {
      "num": 114,
      "text": "It is ------- for the audience to hold its applause until the speaker has finished.",
      "a": "enthusiastic",
      "b": "casual",
      "c": "exclusive",
      "d": "customary",
      "ans": "D"
    },
    {
      "num": 115,
      "text": "Despite ------- that Legend Air would perform poorly with the entry of cheaper competition, it posted strong second-quarter earnings.",
      "a": "predicted",
      "b": "predictable",
      "c": "predicts",
      "d": "predictions",
      "ans": "D"
    },
    {
      "num": 116,
      "text": "Mr. Nigam was ------- retirement when his boss asked him to be the head of security at the new facility.",
      "a": "under",
      "b": "ahead of",
      "c": "nearby",
      "d": "close to",
      "ans": "D"
    },
    {
      "num": 117,
      "text": "Main Street Restaurant offers a menu of ------- prepared lunch and dinner meals.",
      "a": "thought",
      "b": "thoughtfulness",
      "c": "thoughts",
      "d": "thoughtfully",
      "ans": "D"
    },
    {
      "num": 118,
      "text": "------- our public relations manager, Ms. Ghazarian has just been appointed vice president of media relations.",
      "a": "Sincerely",
      "b": "Immediately",
      "c": "Solely",
      "d": "Formerly",
      "ans": "D"
    },
    {
      "num": 119,
      "text": "Videos of Korean pop music have become very popular ------- adolescents worldwide.",
      "a": "including",
      "b": "whereas",
      "c": "among",
      "d": "within",
      "ans": "C"
    },
    {
      "num": 120,
      "text": "Milante Shoes ------- altered the firm's marketing strategy after a recent economic shift.",
      "a": "quick",
      "b": "quickest",
      "c": "quickly",
      "d": "quicken",
      "ans": "C"
    },
    {
      "num": 121,
      "text": "The annual report has been posted online, ------- the director's office has not yet received a printed copy.",
      "a": "but",
      "b": "why",
      "c": "with",
      "d": "once",
      "ans": "A"
    },
    {
      "num": 122,
      "text": "Hasin Fariz turned a study on the ------- effects of sleep into a best-selling book.",
      "a": "favorable",
      "b": "favor",
      "c": "favors",
      "d": "favorably",
      "ans": "A"
    },
    {
      "num": 123,
      "text": "Wynston Containers is ------- a yearly shutdown of its factory so that it can be evaluated for safety and efficiency.",
      "a": "involving",
      "b": "participating",
      "c": "implementing",
      "d": "producing",
      "ans": "C"
    },
    {
      "num": 124,
      "text": "The Girard Botanical Archive has almost 300,000 plant -------, all neatly pressed onto archival paper.",
      "a": "authorities",
      "b": "specimens",
      "c": "founders",
      "d": "specifics",
      "ans": "B"
    },
    {
      "num": 125,
      "text": "Hotels and universities are ------- to recycle their used mattresses through the city's recycling program.",
      "a": "systematic",
      "b": "eligible",
      "c": "familiar",
      "d": "successful",
      "ans": "B"
    },
    {
      "num": 126,
      "text": "The ------- to review plans to replace the Tronton Bridge will be scheduled soon.",
      "a": "heard",
      "b": "hears",
      "c": "hearing",
      "d": "hear",
      "ans": "C"
    },
    {
      "num": 127,
      "text": "Kovox Ltd. aims to optimize quality ------- reducing the impact on the environment.",
      "a": "which",
      "b": "while",
      "c": "because",
      "d": "unless",
      "ans": "B"
    },
    {
      "num": 128,
      "text": "The grocery store ------- vegetables from out of town until local prices went down last month.",
      "a": "is buying",
      "b": "will be buying",
      "c": "has been buying",
      "d": "had been buying",
      "ans": "D"
    },
    {
      "num": 129,
      "text": "All Hershel Industries employees must have a valid ID card ------- enter the building.",
      "a": "in order to",
      "b": "as long as",
      "c": "regarding",
      "d": "always",
      "ans": "A"
    },
    {
      "num": 130,
      "text": "------- and cost factored equally in choosing Cantavox as our main supplier.",
      "a": "Reliability",
      "b": "Allowance",
      "c": "Dependence",
      "d": "Estimation",
      "ans": "A"
    }
  ],
  "part6": [
    {
      "passage_title": "Questions 131-134 refer to the following letter.",
      "passage": "Dear PGD Account Holder,\n\nPGD Bank strives ------- the highest levels of client security and service. This applies not only to online- and telephone-based services, but also to our brick-and-mortar locations. Our three branch offices have proudly been a part of the community ------- a combined total of 40 years.\n\nTo assist you even better in the future, our Smithville branch will be temporarily closed for renovations July 8-22. -------. In the meantime, our other two regional branches in Pine Grove and Bradford will maintain normal business -------. We value your feedback and will respond to any concerns that you may have as soon as possible.\n\nSincerely,\nEdwin Chen, Operations Manager\nPGD Bank",
      "questions": [
        {
          "num": 131,
          "text": "131.",
          "a": "to provide",
          "b": "provided",
          "c": "providing",
          "d": "to be provided",
          "ans": "A"
        },
        {
          "num": 132,
          "text": "132.",
          "a": "except",
          "b": "amid",
          "c": "near",
          "d": "for",
          "ans": "D"
        },
        {
          "num": 133,
          "text": "133.",
          "a": "Unfortunately, services will be limited.",
          "b": "We thank you for trusting in PGD Bank over these years.",
          "c": "We apologize for any inconvenience this may cause.",
          "d": "Traffic on the boulevard has increased lately.",
          "ans": "C"
        },
        {
          "num": 134,
          "text": "134.",
          "a": "investments",
          "b": "hiring",
          "c": "hours",
          "d": "interests",
          "ans": "C"
        }
      ]
    },
    {
      "passage_title": "Questions 135-138 refer to the following e-mail.",
      "passage": "To: Samuel Archerson <sarcherson@vona.co.uk>\nFrom: James Darrers <jdarrers@sky.co.uk>\nDate: 10 January\nSubject: Cost Accountant position\n\nDear Mr. Archerson,\n\nThank you for taking the time to meet with me today. I ------- our conversation, and I remain very interested in the position of cost accountant. I would welcome the opportunity to return for the third and final round of -------.\n\nI am confident my years of accounting experience would benefit your firm. As discussed, over the last ten years, I have helped many companies save a ------- amount of money. I am especially adept at analysing the day-to-day operations of a business and helping to determine more cost-effective methods.\n\nI checked regarding your question about a potential start date. -------. I hope to hear from you in the near future.\n\nSincerely,\nJames Darrers",
      "questions": [
        {
          "num": 135,
          "text": "135.",
          "a": "enjoy",
          "b": "enjoyed",
          "c": "enjoying",
          "d": "will enjoy",
          "ans": "B"
        },
        {
          "num": 136,
          "text": "136.",
          "a": "revisions",
          "b": "promotions",
          "c": "interviews",
          "d": "receptions",
          "ans": "C"
        },
        {
          "num": 137,
          "text": "137.",
          "a": "substance",
          "b": "substantiate",
          "c": "substantially",
          "d": "substantial",
          "ans": "D"
        },
        {
          "num": 138,
          "text": "138.",
          "a": "I have four additional questions to ask you.",
          "b": "I would be able to begin during the first week of February.",
          "c": "I am confident I have the potential for this position.",
          "d": "Thank you for the offer of employment.",
          "ans": "B"
        }
      ]
    },
    {
      "passage_title": "Questions 139-142 refer to the following e-mail.",
      "passage": "To: Mason Wu <mwu@wustudios.co.nz>\nFrom: Trent Tuiloma <ttuiloma@canterburyairport.co.nz>\nSubject: Canterbury Airport project\nDate: Monday, 2 July\n\nDear Mr. Wu,\n\nThank you for agreeing to consult on the Canterbury Airport redesign project. -------. As a result, I am particularly eager to hear your ideas about upgrading our main terminal.\n\nCan we meet this week? There are a number of ------- restaurants near my office. If you are available this Friday, we could meet at Celia's Cafe on Cumberland Street. I would also like a few of my colleagues to ------- us. They would appreciate ------- ways to enhance the airport user's experience.\n\nI look forward to hearing from you soon.\n\nSincerely,\nTrent Tuiloma\nChairman, Canterbury Airport Redesign Team",
      "questions": [
        {
          "num": 139,
          "text": "139.",
          "a": "I can meet you when you arrive.",
          "b": "Scheduling flights can be quite tricky.",
          "c": "I have long admired your work on regional airports.",
          "d": "There are several dining options at the airport.",
          "ans": "C"
        },
        {
          "num": 140,
          "text": "140.",
          "a": "excel",
          "b": "excellent",
          "c": "excellently",
          "d": "excelled",
          "ans": "B"
        },
        {
          "num": 141,
          "text": "141.",
          "a": "join",
          "b": "pay",
          "c": "remind",
          "d": "defend",
          "ans": "A"
        },
        {
          "num": 142,
          "text": "142.",
          "a": "to discuss",
          "b": "discussing",
          "c": "discuss",
          "d": "discussed",
          "ans": "B"
        }
      ]
    },
    {
      "passage_title": "Questions 143-146 refer to the following article.",
      "passage": "SHIRESBERRY (February 15) - The second annual Shiresberry Film Festival begins on April 18 and ------- for five weeks. This year's offerings will not be limited to entries from North America and Europe. We will also be presenting ------- from Asia and South America. And everyone's favorite feature from last year's festival will be back: directors and screenwriters will hold question-and-answer sessions after their films' initial screening. Make sure you do not miss this ------- event. Tickets always sell out quickly. -------. Shiresberry Film Club members can now purchase priority tickets. Visit the Shiresberry Theater box office or www.shiresberrytheater.com.",
      "questions": [
        {
          "num": 143,
          "text": "143.",
          "a": "run",
          "b": "has run",
          "c": "will run",
          "d": "ran",
          "ans": "C"
        },
        {
          "num": 144,
          "text": "144.",
          "a": "movies",
          "b": "clothing",
          "c": "food",
          "d": "books",
          "ans": "A"
        },
        {
          "num": 145,
          "text": "145.",
          "a": "political",
          "b": "popular",
          "c": "practical",
          "d": "preliminary",
          "ans": "B"
        },
        {
          "num": 146,
          "text": "146.",
          "a": "The awards will be presented by Hunter Johns.",
          "b": "Renovations to the space are nearly complete.",
          "c": "The later offerings were an even bigger success.",
          "d": "Sales are open to the general public on March 3.",
          "ans": "D"
        }
      ]
    }
  ],
  "part7": [
    {
      "passage_title": "Questions 147-148 refer to the following advertisement.",
      "passage": "Sedwick Electronics Hiring Event\nMarch 2, 10 A.M.-5 P.M.\n22 Myer Street, Hanover, PA 17331\n\nSedwick Electronics is opening a new manufacturing facility in Hanover, Pennsylvania, and we need to fill many positions. We offer a wonderful work environment and great benefits to our employees.\n\nCome to the event and hear from employees from our Lancaster facility about their experience, learn about the open positions, and speak with our recruiters. No RSVP is necessary. Bring copies of your resume.",
      "questions": [
        {
          "num": 147,
          "text": "For whom is the advertisement intended?",
          "a": "Recruiters",
          "b": "Job seekers",
          "c": "Local business owners",
          "d": "Current Sedwick Electronics employees",
          "ans": "B"
        },
        {
          "num": 148,
          "text": "What is stated about Sedwick Electronics?",
          "a": "It is moving its headquarters.",
          "b": "It offers a training program for new employees.",
          "c": "It requires employees to wear uniforms.",
          "d": "It will have more than one location.",
          "ans": "D"
        }
      ]
    },
    {
      "passage_title": "Questions 149-150 refer to the following notice.",
      "passage": "Aguni Plumbing Supply Returns\n\nBeginning March 1 at all Aguni Plumbing Supply locations, customers will be able to come to our stores to return purchases made online. For a complete refund, the return must be made within 30 days of purchase and must be accompanied by a receipt. In addition, the merchandise must be returned in the original packaging, and all components must be included. After 30 days, refunds will be limited to in-store credit only. Defective items may be exchanged for the same item only.",
      "questions": [
        {
          "num": 149,
          "text": "What will happen on March 1?",
          "a": "A shipment will be returned.",
          "b": "A new policy will go into effect.",
          "c": "A promotional sale will take place.",
          "d": "A customer survey will be published.",
          "ans": "B"
        },
        {
          "num": 150,
          "text": "What is NOT a requirement for a complete refund?",
          "a": "The return must be made at the original purchase location.",
          "b": "The return must be made within a certain time frame.",
          "c": "The item must be returned with all its components.",
          "d": "The item must be returned in the original packaging.",
          "ans": "A"
        }
      ]
    },
    {
      "passage_title": "Questions 151-152 refer to the following information.",
      "passage": "Springfield Community School\nComputer Courses\n\nInternet Safety\nThis course teaches students everything they need to navigate the Web safely.\nCourse ID: 249800:01 | Class Time: Tuesday 5:30-7:30 P.M. | Instructor: Patrick McCann | Room: 211\nCourse ID: 249800:02 | Class Time: Saturday 1:00-3:00 P.M. | Instructor: Nora Farid | Room: 166\n\nSpreadsheet Basics\nThis course teaches the basics of online spreadsheets. Students will learn how to create effective charts for calculating and analyzing data clearly and easily.\nCourse ID: 225810:01 | Class Time: Thursday 5:30-8:30 P.M. | Instructor: Remi Sanders | Room: 118\nCourse ID: 225810:02 | Class Time: Sunday 1:00-4:00 P.M. | Instructor: Nora Farid | Room: 315",
      "questions": [
        {
          "num": 151,
          "text": "Why would people enroll in the course taught by Ms. Sanders?",
          "a": "To practice designing Web sites",
          "b": "To improve their Internet searches",
          "c": "To get tips on creating spreadsheets",
          "d": "To learn how to advertise on the Internet",
          "ans": "C"
        },
        {
          "num": 152,
          "text": "What is indicated about Ms. Farid?",
          "a": "She also teaches children.",
          "b": "She is Ms. Sanders' supervisor.",
          "c": "She teaches twice a week.",
          "d": "She used to work as a data analyst.",
          "ans": "C"
        }
      ]
    },
    {
      "passage_title": "Questions 153-154 refer to the following text-message chain.",
      "passage": "Sally Witham (4:47 P.M.)\nHi Wakiko. I just finished up here at the Kyoto store. I'll be on the train that arrives in Tokyo at 11:35 tomorrow morning. How should I get to your location?\n\nWakiko Ohara (4:48 P.M.)\nI'll have an associate pick you up at the station. How do things look in Kyoto?\n\nSally Witham (4:49 P.M.)\nThe Kyoto store is doing a great job. It has everything that we at the home office are looking for. Athletic shoes and sandals are displayed according to specifications, and sales associates are friendly and knowledgeable.\n\nWakiko Ohara (4:51 P.M.)\nYou should like things here, too. Do you want to begin your visit after lunch, say at 2:00?\n\nSally Witham (4:52 P.M.)\nSounds good. See you tomorrow.",
      "questions": [
        {
          "num": 153,
          "text": "Why did Ms. Witham contact Ms. Ohara?",
          "a": "To review sales figures",
          "b": "To arrange a store visit",
          "c": "To discuss employee performance reviews",
          "d": "To determine the most convenient train to take",
          "ans": "B"
        },
        {
          "num": 154,
          "text": "At 4:51 P.M., what does Ms. Ohara most likely mean when she writes, 'You should like things here, too'?",
          "a": "The Tokyo store is being run according to corporate policy.",
          "b": "Ms. Witham will find the athletic shoes she needs.",
          "c": "Ms. Ohara's associate is always punctual.",
          "d": "The Tokyo store is located next to a popular restaurant.",
          "ans": "A"
        }
      ]
    },
    {
      "passage_title": "Questions 155-157 refer to the following report.",
      "passage": "Structure: Blaine River Drawbridge | Location: Ridgeline Highway, KM 147\nMain span material: Steel girder | Owner: State Highway Agency\nAge of structure: 30 years | Report completed by: Vivian Tulio\nDate: October 17\n\nNotes:\nThe bridge is overall structurally sound. Inform Department of Transportation about small cracks in asphalt.\n\nBridge component | Rating:\nSupport elements: 4\nTowers: 4\nRoad surface: 3\nDrainage features: 4\nSafety barriers: 5\nSidewalk or walkway: 6\n\nKey to ratings:\n1 - Failed; immediate closure required\n2 - Deteriorated; may fail soon\n3 - Shows deterioration but still functions within acceptable parameters\n4 - Shows minor wear\n5 - New condition\n6 - Not applicable",
      "questions": [
        {
          "num": 155,
          "text": "What did Ms. Tulio most likely do?",
          "a": "Make repairs",
          "b": "Hire a contractor",
          "c": "Perform an inspection",
          "d": "Authorize a construction plan",
          "ans": "C"
        },
        {
          "num": 156,
          "text": "What part of the structure is in most need of maintenance?",
          "a": "The support elements",
          "b": "The road surface",
          "c": "The drainage features",
          "d": "The safety barriers",
          "ans": "B"
        },
        {
          "num": 157,
          "text": "What is probably true about the Blaine River Drawbridge?",
          "a": "It was not designed for pedestrian use.",
          "b": "It will be closed for the month of October.",
          "c": "It does not have the required signage.",
          "d": "It is the oldest bridge on the Ridgeline Highway.",
          "ans": "A"
        }
      ]
    },
    {
      "passage_title": "Questions 158-160 refer to the following article.",
      "passage": "Subway Sound to be Upgraded\n\nBOSTON (April 1) - The public address systems at selected subway stations are scheduled to be refurbished, the Transit Authority announced this week. The systems are used to make announcements to commuters both on the platforms and in the stations.\n\nLocal commuters welcomed the news, although for some it was long overdue.\n\n\"It can be pretty difficult to understand the announcements at some of the stations I use most frequently,\" said Ian Miller, who has taken the subway to work nearly every week for the past eighteen years. \"I had heard the reports about it on TV, and all I can say is that it is about time!\"\n\nSome of the systems currently in use are more than 30 years old. Worn-out speakers, wiring, microphones, and amplifiers will be replaced with new, more reliable devices. The work should be completed in October and cost more than $11 million.\n\nBoston's subway system came together in stages over the course of several years. The foundational component of the system's Green Line first opened on Tremont Street in the late 1890s. It was the first of its kind in the United States.",
      "questions": [
        {
          "num": 158,
          "text": "What is the purpose of the article?",
          "a": "To clarify where subway riders can locate information",
          "b": "To describe improvements at some subway stations",
          "c": "To announce the creation of a new subway line",
          "d": "To explain why subway schedules will be revised",
          "ans": "B"
        },
        {
          "num": 159,
          "text": "How does Mr. Miller feel about the plans?",
          "a": "He expects the project to fail.",
          "b": "He is concerned about the cost.",
          "c": "He believes the work is unnecessary.",
          "d": "He has been waiting for the changes.",
          "ans": "D"
        },
        {
          "num": 160,
          "text": "The word 'stages' in paragraph 5, line 2, is closest in meaning to",
          "a": "steps",
          "b": "scenes",
          "c": "train cars",
          "d": "platforms",
          "ans": "A"
        }
      ]
    },
    {
      "passage_title": "Questions 161-163 refer to the following e-mail.",
      "passage": "To: All Staff\nFrom: Selene Hong\nDate: March 25\nSubject: Reminder\n\nDear Staff,\n\nI would like to draw your attention to several new procedures regarding business trip expense reports. - [1] -. Beginning next month, business-related dining receipts must be accompanied by a listing of each dinner attendee. Also, please make sure that you do not include receipts for any non-work-related items or activities with your report. - [2] -.\n\nFinally, note that our accounting software will now automatically calculate for you the total to be reimbursed. You need only to upload images of your receipts for the software to do this.\n\nI will be happy to respond to your questions. - [3] -. However, I will be flying to Tokyo this Friday to meet clients, so I will not be checking e-mail that day. - [4] -.\n\nSincerely,\nSelene Hong\nAssistant Director, Human Resources Department\nDatoric Systems",
      "questions": [
        {
          "num": 161,
          "text": "What is indicated about Datoric Systems?",
          "a": "It has increased the spending amount allowed for business dinners.",
          "b": "It will adopt new procedures for filing travel expense reports.",
          "c": "It has office locations in several countries.",
          "d": "It plans to hold a company celebration.",
          "ans": "B"
        },
        {
          "num": 162,
          "text": "Why is the accounting software mentioned?",
          "a": "To highlight a special capability it has",
          "b": "To encourage staff to install it",
          "c": "To help employees log on to it",
          "d": "To point out that it will be replaced",
          "ans": "A"
        },
        {
          "num": 163,
          "text": "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n'Following these steps will enable us to quickly issue your reimbursement payment.'",
          "a": "[1]",
          "b": "[2]",
          "c": "[3]",
          "d": "[4]",
          "ans": "B"
        }
      ]
    },
    {
      "passage_title": "Questions 164-167 refer to the following article.",
      "passage": "E-Commerce Opening Doors for African Fashion Industry\n\nADDIS ABABA (6 May) - Africa's role as a consumer of fashion has been on the rise in recent years. This trend is largely due to the emergence of e-commerce, which provides Africans the opportunity to buy clothing from retailers with no physical presence on the continent.\n\nPerhaps more importantly, though, the growth of e-commerce is enabling small-scale African designers to also become producers of fashion, as they showcase their collections to consumers worldwide. African shopping Web sites like Jumjum and Longa are making the work of African designers available for purchase not just throughout the continent, but also as far away as London and New York. - [1] -.\n\n\"African designers are finally gaining visibility,\" says Mazaa Absher, founder of Abbi Sportscore, Africa's fastest-growing athletic footwear company. \"We have always had terrific design and production capacity here on the continent, but it was hard getting it out into the world. Now we are generating more sales online than we are in our stores.\" - [2] -.\n\nEven as Ms. Absher has transformed her company into an international powerhouse, she continues to highlight the advantages of manufacturing its products in her home city of Nazret. - [3] -. Africa's strong textile sector and innovative designs combine tradition and wearability, and this formula is allowing companies like hers to set their sights beyond the continent.\n\n\"As more cities in Ethiopia - and all over Africa - improve their manufacturing capacity, it will become easier to reach the rest of the world,\" says Ms. Absher. - [4] -.",
      "questions": [
        {
          "num": 164,
          "text": "What is the main topic of the article?",
          "a": "New trends in marketing athletic footwear",
          "b": "Increased competition in the African clothing market",
          "c": "Recent growth in the African fashion industry",
          "d": "The largest clothing companies in Africa",
          "ans": "C"
        },
        {
          "num": 165,
          "text": "What is indicated about Abbi Sportscore?",
          "a": "It sells its products only online.",
          "b": "It manufactures its shoes in Nazret.",
          "c": "It will be moving its main offices soon.",
          "d": "It was the first shoe company in Ethiopia.",
          "ans": "B"
        },
        {
          "num": 166,
          "text": "What is suggested about the Jumjum and Longa Web sites?",
          "a": "They sell only handcrafted goods.",
          "b": "They receive orders from around the world.",
          "c": "They offer free shipping to London and New York.",
          "d": "They are planning to open retail stores.",
          "ans": "B"
        },
        {
          "num": 167,
          "text": "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n'The city boasts four garment factories, with a fifth scheduled to be built this year in nearby Wonji.'",
          "a": "[1]",
          "b": "[2]",
          "c": "[3]",
          "d": "[4]",
          "ans": "C"
        }
      ]
    },
    {
      "passage_title": "Questions 168-171 refer to the following text-message chain.",
      "passage": "Gary Park (10:23 A.M.)\nI e-mailed you the cover design for our September issue a few minutes ago. Did you receive it?\n\nJill Riley (10:26 A.M.)\nYes, but is this the latest version? I thought we agreed that the background color should be lighter so the article titles are more visible.\n\nGary Park (10:28 A.M.)\nI forgot - sorry about that! I'm just now sending the file with the most recent version.\n\nJill Riley (10:30 A.M.)\nOpening it now ... That's more like it. I'll forward it to Graphics and request a sample printout.\n\nJill Riley (10:35 A.M.)\nGood morning, Mr. Ojeda. Our new cover design is ready. When do you think you'll have a chance to work on it?\n\nFrank Ojeda (10:38 A.M.)\nSend it to me now. I'll have a print copy ready for your approval after lunch.",
      "questions": [
        {
          "num": 168,
          "text": "Where do the people most likely work?",
          "a": "At a bookstore",
          "b": "At a public library",
          "c": "At a television studio",
          "d": "At a magazine publisher",
          "ans": "D"
        },
        {
          "num": 169,
          "text": "Why does Mr. Park apologize?",
          "a": "He sent the wrong file.",
          "b": "He used an old e-mail address.",
          "c": "He missed a project deadline.",
          "d": "He lost an important document.",
          "ans": "A"
        },
        {
          "num": 170,
          "text": "At 10:30 A.M., what does Ms. Riley most likely mean when she writes, 'That's more like it'?",
          "a": "The budget is more reasonable.",
          "b": "The color looks better.",
          "c": "The story is more interesting.",
          "d": "The schedule is more realistic.",
          "ans": "B"
        },
        {
          "num": 171,
          "text": "What will Mr. Ojeda do by the afternoon?",
          "a": "Approve a marketing plan",
          "b": "Produce a sample",
          "c": "Repair a printer",
          "d": "Make copies of an agreement",
          "ans": "B"
        }
      ]
    },
    {
      "passage_title": "Questions 172-175 refer to the following letter.",
      "passage": "8 February\nMs. Mala Chelvi\n60 Jalan Tun Razak\n54200 Kuala Lumpur\n\nDear Ms. Chelvi,\n\nWe are delighted to inform you that you have been nominated as a finalist for the Small Business Challenge competition this year. Now in its fifth year, this competition is designed to highlight innovative products and services launched by young entrepreneurs. The Web application that you developed, which provides a means of matching charitable organizations with volunteers, earned one of the top scores from our panel of judges.\n\nIn the next round of the challenge, you will participate in a live presentation about your product before a panel of expert judges. The three people with the best presentations will receive one-time grants of MYR 10,000 each to invest in their businesses.\n\nPlease go to sbc.org/competition and submit an outline of your presentation, a brief video that clearly illustrates the use of your application, and a passport-sized photograph of yourself. You will also need to sign a consent form allowing us to use your name and photo, if needed, in promotional materials on our Web site. The deadline for submission of these materials is 10 March.\n\nBest regards,\nFelix Pang\nChairperson, Small Business Challenge Committee",
      "questions": [
        {
          "num": 172,
          "text": "What is the purpose of the letter?",
          "a": "To seek volunteers for an event",
          "b": "To notify a contest finalist",
          "c": "To sell business consultation services",
          "d": "To offer a small-business loan",
          "ans": "B"
        },
        {
          "num": 173,
          "text": "What does Ms. Chelvi most likely specialize in?",
          "a": "Law",
          "b": "Technology",
          "c": "Finance",
          "d": "Marketing",
          "ans": "B"
        },
        {
          "num": 174,
          "text": "The word 'illustrates' in paragraph 3, line 2, is closest in meaning to",
          "a": "represents",
          "b": "translates",
          "c": "lightens",
          "d": "decorates",
          "ans": "A"
        },
        {
          "num": 175,
          "text": "What is Ms. Chelvi asked to do by March 10?",
          "a": "Update a Web page design",
          "b": "Give a presentation",
          "c": "Sign a consent form",
          "d": "Pay a fee",
          "ans": "C"
        }
      ]
    },
    {
      "passage_title": "Questions 176-180 refer to the following e-mail and receipt.",
      "passage": "To: riedewald@parasur.net.sr\nFrom: clientservices@mhf.ca\nDate: April 2, 12:21 P.M.\nSubject: Your feedback\n\nDear Mr. Riedewald,\n\nThank you for filling out the McMann Home Furnishings (MHF) survey. To show our appreciation, we have added reward points to your account. They can be applied to the purchase of products offered online as well as those offered in our retail stores. Clearance items and those priced $15.00 and above may not be purchased using credits.\n\nTo use your reward points for an online purchase, select the items you would like to purchase and then check out. At the bottom of the page, select \"Apply credits.\" The value of the applied credits will appear on your order receipt as a special discount.\n\nIf you would prefer to use reward points at one of our retail locations, you can do so by logging in to your account on our Web site. Go to the My Rewards page, and then select \"Print as a coupon.\" The coupon will have a bar code that can be scanned at the store's checkout counter.\n\nSincerely,\nClient Services, McMann Home Furnishings\n\n--------------------------------------------\nOnline Order #1157\nMcMann Home Furnishings Store\nMarch 19, 11:31 A.M.\n\nHand-Painted Picture Frame\nQuantity: 1 | Price: 10.00 | Special Discount: -10.00\n\nSailboat Ceramic Mug\nQuantity: 4 | Price: 40.00 | Clearance Discount: -20.00\n\nFloral Blanket\nQuantity: 1 | Price: 25.00\n\nPhoto Album\nQuantity: 1 | Price: 34.00 | Seasonal Item Discount: -17.00\n\nItem total: 62.00\nShipping: Free\nTotal: 62.00",
      "questions": [
        {
          "num": 176,
          "text": "According to the e-mail, how did Mr. Riedewald receive reward points?",
          "a": "He won an online contest.",
          "b": "He participated in a customer survey.",
          "c": "He spent a certain amount of money.",
          "d": "He returned an item.",
          "ans": "B"
        },
        {
          "num": 177,
          "text": "In the e-mail, the phrase 'filling out' in paragraph 1, line 1, is closest in meaning to",
          "a": "emptying",
          "b": "supplying",
          "c": "completing",
          "d": "expanding",
          "ans": "C"
        },
        {
          "num": 178,
          "text": "How can customers apply their reward points in an MHF retail store?",
          "a": "By entering their account number",
          "b": "By entering their phone number",
          "c": "By scanning a coupon's bar code",
          "d": "By going to the Client Services Department",
          "ans": "C"
        },
        {
          "num": 179,
          "text": "According to the receipt, what is true about Mr. Riedewald?",
          "a": "He paid for delivery of the items.",
          "b": "He purchased the items in the evening.",
          "c": "He paid over $70 for all items combined.",
          "d": "He purchased only one item at regular price.",
          "ans": "D"
        },
        {
          "num": 180,
          "text": "What item did Mr. Riedewald most likely purchase using reward credits?",
          "a": "The picture frame",
          "b": "The ceramic mug",
          "c": "The floral blanket",
          "d": "The photo album",
          "ans": "A"
        }
      ]
    },
    {
      "passage_title": "Questions 181-185 refer to the following letter and order.",
      "passage": "Two Swan Press\n72 Holywell Road, Edinburgh EH8 8PJ\n4 December\n\nMr. Albert Morello\n17 Peyton Avenue\nKingston 5\nJamaica, W.I.\n\nDear Mr. Morello:\n\nEnclosed please find your royalty payment for Understanding Our Oceans. You should have recently received an e-mail that listed the sales figures and the royalties due to you for the print and electronic versions of your book.\n\nWe are proud to announce that Two Swan Press was given the Publisher of the Year Award by the UK Book Industry in October. We thank the authors who have worked with us since our founding five years ago.\n\nAll Two Swan Press authors are entitled to an author discount of 40 percent off any title on our Web site. Simply use the code AUX1417 for your discount.\n\nIf you have any questions at all, please do not hesitate to contact me.\n\nKind regards,\nSarah Wicklin\n\n--------------------------------------------\nhttps://www.twoswanpress.co.uk/orderconfirmation\nTHANK YOU FOR YOUR ORDER!\nSpecial December Offer - free shipping on all orders over £35\n\nName: Duncan Booth\nE-mail: dbooth@silvertech.co.uk\nDate of purchase: 12 December\nShip to: Duncan Booth, 321 Maslin St., Coatbridge ML5 1LZ, Scotland, UK\n\n1 Business in Our Lives by Elaine Schuyler: £75.00\nDiscount Applied (AUX1417): -30.00\nBalance Due: £45.00\nPaid by Credit Card ****5732\n\nItems from multiple orders may be combined in the same package. We will notify you when your order has shipped.",
      "questions": [
        {
          "num": 181,
          "text": "What is a purpose of the letter?",
          "a": "To ask Mr. Morello to write a book",
          "b": "To explain an enclosed contract",
          "c": "To notify Mr. Morello of a payment",
          "d": "To describe an updated personnel policy",
          "ans": "C"
        },
        {
          "num": 182,
          "text": "What was sent in a previous message to Mr. Morello?",
          "a": "Incorrect contact information",
          "b": "Detailed sales numbers",
          "c": "A list of suggested changes",
          "d": "A link to an electronic book",
          "ans": "B"
        },
        {
          "num": 183,
          "text": "What does Ms. Wicklin mention about Two Swan Press?",
          "a": "It moved to a new location in October.",
          "b": "It has launched a new program for its fifth anniversary.",
          "c": "It has won an industry award.",
          "d": "It has decided to focus on scientific publications.",
          "ans": "C"
        },
        {
          "num": 184,
          "text": "What is suggested about Mr. Booth?",
          "a": "He is a Two Swan Press author.",
          "b": "He wrote Business in Our Lives.",
          "c": "He is an acquaintance of Mr. Morello.",
          "d": "He has purchased items from Two Swan Press before.",
          "ans": "A"
        },
        {
          "num": 185,
          "text": "What is indicated about the order?",
          "a": "It has been delayed.",
          "b": "It has not yet been paid.",
          "c": "It contains multiple books.",
          "d": "It includes free shipping.",
          "ans": "D"
        }
      ]
    },
    {
      "passage_title": "Questions 186-190 refer to the following e-mail, form, and article.",
      "passage": "To: All Staff\nFrom: Personnel Department\nDate: June 20\nSubject: Mentoring Program\nAttachment: Application\n\nEmployees who have been with Broadside Electronics for less than eighteen months are invited to apply to participate in a new mentoring program that will match a maximum of ten junior employees with long-term company veterans. The goal is that junior employees will sharpen corporate skills, better understand company culture, and develop a more focused career path. Mentees will be assigned to a mentor based strictly on their work assignment and professional interests. The pairs will meet at mutually convenient times throughout the year, from three to five hours per month.\n\nTo be considered for participation in this initiative, complete the attached application and return to Mentoring Program Director Tim Wrigley at t.wrigley@broadsideelec.com by July 1. Mr. Wrigley will send notification of his selections by July 15.\n\n--------------------------------------------\nMENTORING PROGRAM APPLICATION\nName: Cora Drummond\nDivision: Sales | Extension: 144\nProfessional areas of interest:\nI am most interested in learning about our markets abroad and developing my sales-presentation abilities for these international markets. I am also interested in general career guidance.\nBest workdays and times for meeting: Any weekday morning except Monday.\n\n--------------------------------------------\nThe Broadside Company Newsletter\nMentoring Program Sees Results\n\nLong-time employee and Vice President of Sales Alena Russo was intrigued when a Personnel Department director approached her about mentoring a less experienced employee under a program that began last year. She is glad to have accepted the assignment. \"After working with Ms. Drummond, I am more satisfied with my own duties, because I know I have helped a professional who is just getting started. I only wish that I had had someone looking out for me in my early years,\" remarked Ms. Russo.\n\nMs. Drummond explains that she \"needed pointers on how to make better sales pitches.\" She reports that her sales are up by 20 percent now. She better understands the opportunities Broadside Electronics has to offer and what is required to become a manager. \"Thanks to Ms. Russo, I have been able to define my career goals, and I am a happier person when I arrive to work every day.\"\n\nNew mentorship pairs are now being formed. Interested parties should contact Tim Wrigley in the Personnel Department.",
      "questions": [
        {
          "num": 186,
          "text": "What does the e-mail indicate about the mentoring program?",
          "a": "It is popular industry-wide.",
          "b": "The number of participants is limited.",
          "c": "It is designed for staff in the sales division.",
          "d": "Participants must attend an orientation meeting.",
          "ans": "B"
        },
        {
          "num": 187,
          "text": "How will the junior employees most likely be selected?",
          "a": "They will be chosen from a management-training group.",
          "b": "They will undergo competitive interviews.",
          "c": "They will be evaluated by Mr. Wrigley.",
          "d": "They will be recommended by a local business school.",
          "ans": "C"
        },
        {
          "num": 188,
          "text": "What is suggested about Ms. Drummond?",
          "a": "She has worked at Broadside Electronics for less than eighteen months.",
          "b": "She has just transferred from another department.",
          "c": "She has received a positive annual review.",
          "d": "She has made many successful presentations abroad.",
          "ans": "A"
        },
        {
          "num": 189,
          "text": "What is most likely true about Ms. Russo?",
          "a": "She is planning to retire soon.",
          "b": "She has international sales experience.",
          "c": "She has mentored many junior employees.",
          "d": "She recently joined the hiring team.",
          "ans": "B"
        },
        {
          "num": 190,
          "text": "What benefit from the mentoring program have both Ms. Drummond and Ms. Russo enjoyed?",
          "a": "Increased job satisfaction",
          "b": "Quick promotions",
          "c": "Paycheck bonuses",
          "d": "Clearer career goals",
          "ans": "A"
        }
      ]
    },
    {
      "passage_title": "Questions 191-195 refer to the following Web site, online form, and e-mail.",
      "passage": "https://www.runklefencing.co.uk\nHome | Temporary | Residential | Commercial\nTemporary Fencing Service\nNeed a temporary fence installed at your residence, workplace, or special event? Our expert team will deliver and install chain-link fencing on the booked date and time. When the fence is no longer needed, we will take it down and haul it away. Like our residential and commercial fencing, our temporary fences are obtained from the best manufacturers using the finest materials. Our fences have a tidy, sturdy, professional appearance that local residents and businesses appreciate. We also see to all legally required inspections and certifications.\n\nReady for a price quote? Contact us today via our Online Quote service. Be sure to provide the following information so we can provide an accurate estimate:\n1. The preferred height of your fence (Be aware that local regulations commonly allow a maximum height of three metres.)\n2. The perimeter of the area you need to enclose\n3. The number of gated entrances needed\n4. The number of days the fence needs to be up\n\n--------------------------------------------\nONLINE QUOTE REQUEST FORM\nName: Marguerite Carhart | Phone: (0117) 555-9102\nInstallation Address: 438 Stretford Way, Bristol BS5 7TB\nE-mail: mcarhart@stockporteventcentre.co.uk\nToday's date: 8 August\nFence Details:\nI need a temporary three-metre-tall fence installed around the Stockport Event Centre within the next two weeks. This is to prevent the public from entering while we make renovations from 18 to 30 August. Two gates are needed so that workers and vehicles may enter and leave the location.\n\n--------------------------------------------\nTo: mcarhart@stockporteventcentre.co.uk\nFrom: hmontalbo@runklefencing.co.uk\nDate: 9 August\nSubject: Quote Number 080817\nAttachment: fencequote_mcarhart\n\nDear Ms. Carhart,\n\nThank you for your enquiry. Please see the attached estimate for the work you requested. Note that the price of delivery is included at no further charge unless a rush order - one providing less than three weeks' notice - is required. This is a rough estimate based on the information you provided. If you ring us at (0117) 555-2938 and provide us with a missing detail, I can give you a more accurate quote.\n\nYou might also consider including a plastic curtain with your order. This would be wrapped around and fastened to the fence, hiding the construction site from the view of pedestrians. If this interests you, we can include it in the revised quote.\n\nBest Regards,\nHoward Montalbo",
      "questions": [
        {
          "num": 191,
          "text": "What does the Web site indicate about fences taller than three meters?",
          "a": "They are made of plastic.",
          "b": "They are usually prohibited by law.",
          "c": "They require special transportation.",
          "d": "They must be ordered directly from the manufacturer.",
          "ans": "B"
        },
        {
          "num": 192,
          "text": "According to the form, why does Ms. Carhart need a temporary fence installed?",
          "a": "To mark a property line",
          "b": "To draw attention to an exhibit",
          "c": "To control a crowd at a special event",
          "d": "To limit public access to a work site",
          "ans": "D"
        },
        {
          "num": 193,
          "text": "What information does Ms. Carhart fail to give about the fence she needs?",
          "a": "The height of the fence to be erected",
          "b": "The dates when the fence is needed",
          "c": "The perimeter of the area to be enclosed",
          "d": "The number of entrances needed",
          "ans": "C"
        },
        {
          "num": 194,
          "text": "What is implied about Ms. Carhart's fence project?",
          "a": "There will be a charge for delivery.",
          "b": "The project involves work at several job sites.",
          "c": "Extra workers must be hired to install the fence.",
          "d": "Inspectors must first approve the project.",
          "ans": "A"
        },
        {
          "num": 195,
          "text": "Why does Mr. Montalbo recommend adding a curtain?",
          "a": "It would act as a noise barrier.",
          "b": "It would help keep in dust.",
          "c": "It would serve as a visual screen.",
          "d": "It would improve safety conditions.",
          "ans": "C"
        }
      ]
    },
    {
      "passage_title": "Questions 196-200 refer to the following e-mail, flyer, and schedule.",
      "passage": "To: Daniel Rodrigues Pereira\nFrom: Livia Romero\nSubject: Company outing\nDate: August 5\n\nHello Daniel,\n\nI hope you are settling in well. I'm sure you have had a busy few weeks. Around this time of year, the office manager typically begins arranging our annual company outing. I think we mentioned this during your interview in June. Previously, we have done things like going to a concert and taking a local river cruise. The outing is always great for morale, and everyone looks forward to it.\n\nThis year, I think it would be a good idea to get tickets to a sporting event. I know that many staff members are fans of the San Jose Starlings baseball team. It should be an evening game when the team is playing at home. We have a budget of $600.00 this year. Looking at the ticket prices, it seems that will be just enough to get a ticket for every staff member.\n\nI'm sure Elise can assist you with this; she has often helped organize the outings. Let me know if you have any questions.\n\nBest,\nLivia Romero\nDirector of Administration, Loftgren Consulting\n\n--------------------------------------------\nPlan your next event with the San Jose Starlings!\nDiscounted tickets are available for groups of ten or more. The more tickets you buy, the more you save - perfect for family gatherings, company outings, or charity fund-raisers! Get perks such as free tickets for the organizer, discounts on food, and your group's name displayed on the scoreboard.\n\nGroup Ticket Pricing:\n10 tickets: $130.00\n30 tickets: $360.00\n50 tickets: $550.00\n70 tickets: $700.00\n\nContact grouptickets@sanjosestarlings.com or call 408-555-0101 for more information.\n\n--------------------------------------------\nSan Jose Starlings\nAugust Schedule:\nDate | Day | Time | Opposing Team | Home or Away\nAugust 13 | Sunday | 1:05 P.M. | Aspen Monarchs | Home\nAugust 15 | Tuesday | 7:05 P.M. | Aspen Monarchs | Home\nAugust 19 | Saturday | 1:05 P.M. | Philipsburg Pinstripes | Away\nAugust 22 | Tuesday | 7:05 P.M. | Philipsburg Pinstripes | Away\n\nPurchase tickets online at www.sanjosestarlings.com/tickets.",
      "questions": [
        {
          "num": 196,
          "text": "Why did Ms. Romero send the e-mail to Mr. Rodrigues Pereira?",
          "a": "To tell him about an upcoming budget cut",
          "b": "To invite him to a concert",
          "c": "To introduce him to his new assistant",
          "d": "To ask him to arrange an event",
          "ans": "D"
        },
        {
          "num": 197,
          "text": "What does the e-mail imply about Mr. Rodrigues Pereira?",
          "a": "He recently attended a San Jose Starlings game.",
          "b": "He will be leaving in a few weeks to go on vacation.",
          "c": "He is a professional party planner.",
          "d": "He recently began working for Loftgren Consulting.",
          "ans": "D"
        },
        {
          "num": 198,
          "text": "According to the flyer, what is a benefit of buying tickets as a group?",
          "a": "Reduced ticket prices",
          "b": "Free food",
          "c": "Front-row seating",
          "d": "T-shirts with the team's logo",
          "ans": "A"
        },
        {
          "num": 199,
          "text": "How many employees does Loftgren Consulting most likely have?",
          "a": "10",
          "b": "30",
          "c": "50",
          "d": "70",
          "ans": "C"
        },
        {
          "num": 200,
          "text": "On what date could Loftgren Consulting employees attend a game?",
          "a": "August 13",
          "b": "August 15",
          "c": "August 19",
          "d": "August 22",
          "ans": "B"
        }
      ]
    }
  ]
};
