import RichieImg from "@/app/assets/Richie.jpg";
import RyanImg from "@/app/assets/Ryan.jpg";
import NnennaImg from "@/app/assets/Nnenna.jpg";
import AbdulImg from "@/app/assets/Abdul.jpg";
import OgeImg from "@/app/assets/oge.jpg";
import SarahImg from "@/app/assets/sarah_reed.webp";

import VStack from "@/app/(components)/VStack";
import TeamMemberCard from "@/app/about_us/meet_the_team/(components)/TeamMemberCard";

export default function MeetTheTeamPage() {
  return (
    <>
      <VStack className="w-full h-[30rem] lg:min-h-[40rem] pt-[65px] bg-gradient-to-t from-slate-900 from-15% via-slate-800 via-45% to-slate-700 to-90% justify-center items-center">
        <h2 className="uppercase font-bold text-center text-2xl lg:text-4xl text-slate-50">
          Meet The Team
        </h2>
      </VStack>
      <VStack className="w-full bg-slate-50 px-4 py-12 items-center justify-center">
        <div className="grid lg:grid-cols-3 container gap-16 justify-items-center">
          <TeamMemberCard
            name="Sarah Reed"
            position="Project Management | Lean AGILE Expert"
            img={SarahImg}
          >
            <p>
              With a passion for driving organizational agility and a proven
              track record of successful delivery, Sarah is an experienced
              Certified professional scrum master, product owner, project
              manager and agile coach.
            </p>

            <p>
              Sarah has worked with 65+ software development teams and led 20+
              scaled agile planning events (teams of teams with 100+ attendees)
              across multiple geographies, timezones and cultures. She has led
              6+ companies through successful large-scale agile transformations
              and mentored 80+ aspiring agile professionals on their career
              development journey.
            </p>

            <p>
              Sarah&apos;s major disciplines are Advanced Professional Scrum
              Product Owner, Advanced Professional Scrum Master and SAFe Program
              Consultant. She actively uses Project Management, Kanban, Nexus,
              S@S, XP, DevOps, Lean Six Sigma and ITIL techniques for
              results-orientated holistic delivery.
            </p>

            <p>
              Sarah&apos;s coaching style is marked by a blend of empathy,
              strategic thinking, and a deep understanding of lean agile
              principles and practices. With a servant leadership mindset and
              credible communication style, she is a catalyst for positive
              change for those who engage with her.
            </p>

            <p>
              Her ability to seamlessly transition between strategic leadership
              and hands-on coaching has made her an asset to any team aiming for
              sustained high performance and excellence in project delivery.
            </p>

            <p>
              As an advocate for continuous improvement, Sarah is committed to
              bringing out the best in individuals, teams, and organizations
              through the power of lean agile principles and practices.
            </p>
          </TeamMemberCard>

          <TeamMemberCard
            name="Richie Ugwu"
            position="Head of Software Quality Assurance & Release | AGILE Delivery"
            img={RichieImg}
          >
            <p>
              Richie Ugwu is a Software Quality Assurance & Release Manager with
              over 10 years of experience working across both public and private
              sectors.
            </p>

            <p>
              His certifications, in addition with his degree in Pub Admin &
              Management, IT Business Media (Cambridge) and an MBA(Warsaw) has
              equipped him sufficiently to handle managerial roles.
            </p>

            <p>
              He has a successful career as a QA & Release manager, Test
              Automation Engineer, Agile Delivery Manager spanning across
              various companies in the E-commerce and Tech spaces. In addition
              to his day job where he is heading a cross functional DevOps team,
              he is also an investor, a serial entrepreneur, a mentor and the
              founder of SkyLink Consult Ltd.
            </p>

            <p>
              Richie Ugwu’s passion for empowering people and advancement of
              technology, its processes and the overall advancement of people
              and skills, has driven his need to share his expertise with others
              and help them achieve their goals. In his words, Information is
              power and meant to be shared.
            </p>

            <p>
              Richie in a nutshell; “Result Oriented, Powered by intellect,
              driven by value”.
            </p>
          </TeamMemberCard>

          <TeamMemberCard
            name="Ryan Hughes"
            position="Software Engineer | Software Developer"
            img={RyanImg}
          >
            <p>
              Ryan Hughes is a Software Engineer with over 6 years experience
              working in the IT sector. He possesses a Bachelor’s degree in
              Business Administration, that has equipped him sufficiently to
              handle administrative roles.
            </p>

            <p>
              His career progress in the IT sector has taken him across a couple
              of seasoned organizations. Currently, his path has taken him into
              the Security and Investigations sector, where he works as a Senior
              Developer.
            </p>

            <p>
              As a young programmer Ryan is all about creation, as such, he
              takes pleasure in sharing his experience and introducing people to
              a world that has given him fulfilment.
            </p>
          </TeamMemberCard>

          <TeamMemberCard
            name="Nnenna Idegwu Stevenson"
            position="Business Analyst | Product Manager | AGILE"
            img={NnennaImg}
          >
            <p>
              Nnenna Idegwu Stevenson is an Enterprise Architect, Certified
              Product Owner, BCS and IIBA Certified Business Analysis
              Professional (CBAP) with over 9 years experience working across
              Public, Private and Regulated sectors as a Software project and
              product delivery professional. She holds several certification in
              addition to her basic degree in Computer Science and a Masters in
              Information systems.
            </p>

            <p>
              Nnenna has successfully managed Sapphire Stevenson Ltd, where she
              offered Business Analysis and Product Management consultancy to a
              Public Sector organization and trained/mentored Business Analysts
              from mid-level to senior level.
            </p>

            <p>
              Her passion and enthusiasm for the IT space is unparalleled, which
              is an added benefit to the excellent communication and
              interpersonal skills she possesses.
            </p>
          </TeamMemberCard>

          <TeamMemberCard
            name="Muhammad Abdul Salams"
            position="Software Developer | Test Automation Engineer"
            img={AbdulImg}
          >
            <p>
              Muhammad Abdul Salam is a Software developer who specializes in
              Android and Hybrid App development with over 5 years’ experience
              in the Software industry. His most prominent and outstanding
              achievement is creating payment solutions for clients such as
              British Gas, Eon, and EDF while working on behalf of Payzone Bill
              Payments Ltd. Currently, his apps are being used and appreciated
              by thousands of merchants in UK and Ireland.
            </p>

            <p>
              Muhammad is also an entrepreneur and Founder of Xenon Software Hub
              Ltd, his startup is currently developing National Level
              Applications for clients in UK and Ireland.
            </p>

            <p>
              A Programming and development is not just a career to Muhammad,
              it’s his way of life. This fuels his passion to help others
              achieve their goals. Students under his mentorship don’t only
              learn programming skills, they learn the most wanted, valuable and
              up-to-date industry level skill, which help them achieve a better
              future.
            </p>
          </TeamMemberCard>
          <TeamMemberCard
            name="Oge Chukwuemeka"
            position="Data Analyst | Data Scientist"
            img={OgeImg}
          >
            <p>
              Oge Chukwuemeka is currently a Data Analyst/Scientist in the IT
              sector and had prior worked in multiple data and customer centric
              domains for over 10 years.
            </p>
            <p>
              A graduate of Computer science with Post Graduate education in
              Data Science and Business Analytics as well as Data Analytics. Her
              pre-IT professional experiences equipped her with domain knowledge
              and made her a data Enthusiast.
            </p>
            <p>
              She has been opportune to work with a couple of organizations on
              different data related IT projects building Information/Data
              Management systems, Applications, Predictive Models, Artificial
              intelligent systems both on in-house projects and as a consultant.
              She has also served as a Data Science Instructor in R, Python,
              MYSQL as well as a mentor.
            </p>
            <p>
              With a mindset of always making progress no matter how little.
              With same passion she gets joy empowering anyone who dare to dream
              regardless of perceived insurmountable challenges.
            </p>
          </TeamMemberCard>
        </div>
      </VStack>
    </>
  );
}
