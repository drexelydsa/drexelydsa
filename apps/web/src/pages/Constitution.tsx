import { PageLayout } from "../components";

export default function Constitution() {
  const FRAC: Record<string, React.ReactNode> = {
    "12": (
      <>
        <sup>1</sup>&frasl;<sub>2</sub>
      </>
    ),
    "13": (
      <>
        <sup>1</sup>&frasl;<sub>3</sub>
      </>
    ),
    "23": (
      <>
        <sup>2</sup>&frasl;<sub>3</sub>
      </>
    ),
  };
  return (
    <PageLayout>
      <div className="flex flex-col items-start gap-2">
        <h1 className="uppercase text-2xl font-black mb-4">
          Drexel YDSA Constitution
        </h1>
        <p className="text-lg italic font-medium ">
          Approved by Membership 6/28/2026
          <br /> <br />
          In effect 9/21/2026
        </p>
        <h2 className="uppercase text-xl font-black mt-8 mb-4">
          Article I. Name and Affiliation
        </h2>
        <ol className="list-decimal list-outside ml-6 text-lg space-y-2">
          <li>
            The name of this organization shall be the Drexel University chapter
            of the Democratic Socialists of America, hereafter refered to as
            "the Chaper."
          </li>
          <li>
            The Chapter shall be the Drexel University chapter of the Young
            Democratic Socilaists of America, the youth wing of the Democratic
            Socialists of America.
          </li>
        </ol>
        <h2 className="uppercase text-xl font-black mt-8 mb-4">
          Article II. Purpose &amp; Mission Statement
        </h2>
        <ol className="list-decimal list-outside ml-6 text-lg space-y-2">
          <li>
            Our mission is to organize the Drexel University community in the
            movement for socialism, understanding that true human liberation is
            impossible under capitalism. We will transform Drexel to serve the
            working-class people whose shoulders it stands on, including the
            students, staff, faculty, neighbors, the historical Black Bottom and
            the historical Lenape communities of this land. It will be our duty
            to demonstrate a socialist future in our actions, and to educate the
            student population with the purpose of developing class
            consciousness. Our vision for socialism is profoundly democratic,
            feminist, anti-racist, anti-imperialist and anti-fascist. We will
            uplift those voices which are usually left unheard, and work in
            coalition with any organization that strives for the betterment of
            all of our conditions.
          </li>
        </ol>
        <h2 className="uppercase text-xl font-black mt-8 mb-4">
          Article III. Membership
        </h2>
        <ol className="list-decimal list-outside ml-6 text-lg space-y-2">
          <li>
            Membership in the organization shall be open to any member of the
            campus community, including students, faculty, staff, and alumni at
            Drexel University.
          </li>
          <li>
            Eligibility for membership or appointed or elected student officer
            positions in this organization may not be limited on the basis of
            race, sex, gender, religion, national origin, sexual orientation,
            physical or mental handicap, ancestry, or medical condition.
          </li>
          <li>
            Membership shall be granted to any eligible person that attends at
            least three (3) of any of the following in a given academic term:
            general body meetings, committee meetings, and public events
            (defined as any event hosted by Drexel YDSA, including tabling).
            These members, hereafter referred to as “General Members,” and will
            have the right to vote on Chapter matters and leadership elections.
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>
                General Members shall lose membership status following any
                academic term where they do not meet the above requirement or
                switch to Dues Membership.
              </li>
            </ol>
          </li>
          <li>
            Membership shall also be granted to any eligible dues-paying or
            -waived DSA member who affiliates with the Chapter. These members,
            hereafter referred to as “Dues Members,” will have the right to vote
            on Chapter matters and leadership elections, as well as bring up
            motions for a vote by the Chapter and run for leadership positions.
          </li>
        </ol>
        <h2 className="uppercase text-xl font-black mt-8 mb-4">
          Article IV. Steering Committee &amp; Duties
        </h2>
        <ol className="list-decimal list-outside ml-6 text-lg space-y-2">
          <li>
            The Steering Committee shall be composed of two (2) Co-Chairs, one
            (1) Secretary, and one (1) Treasurer.
          </li>
          <li>
            To be eligible for the Steering Committee, candidates must be
            dues-paying or dues-waived members of YDSA.
          </li>
          <li>
            Candidates will nominate themselves no later than one week prior to
            the date of the election.
          </li>
          <li>
            Elections shall occur on a meeting date during the last full month
            of the Fall and Spring quarters.
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>
                There shall be a public candidate forum no later than one week
                prior to the Fall election during a general meeting.
              </li>
              <li>
                There shall be no candidate forum or meeting time allocated to
                the Spring election, unless a majority vote calls for one.
              </li>
            </ol>
          </li>
          <li>
            All elections shall be Meek Single Transferrable Vote.
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>
                In the event of a tie, successive votes will be held until a
                winner is determined.
              </li>
            </ol>
          </li>
          <li>
            The term of the Steering Committee shall last one semester or two
            quarters.
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>
                Steering Committee vacancies shall be filled via special
                election, to be announced within one week of a Steering
                Committee seat becoming vacant, and held no later than two weeks
                after the announcement.
              </li>
            </ol>
          </li>
          <li>
            Steering Committee members may be subject to recall by petition with
            signatures of one-third ({FRAC["13"]}) of the chapter’s membership,
            as listed in the last ActionKit report sent by YDSA national.
            Submission of such a valid petition shall trigger a recall election
            to be held no later than 30 days from receipt of that petition by
            the Steering Committee. The meeting for a recall vote shall be
            properly notified to the membership.{" "}
          </li>
          <li>
            Along with the recall process which may be initiated by members,
            members of the Steering Committee may be removed as a result of a
            grievance when they have been found to be negligent or mishandle
            their power and responsibilities.
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>
                Unilateral decision making, abuse of power, domineering
                discussion/coercing decisions in conversations, breaches of
                confidentiality or discretion and/or any other actions which
                constitute the need for an investigation into undemocratic
                behavior fall under the category of malicious mishandling of
                vested power.
              </li>
              <li>
                Falling under the category of negligence; not attending steering
                committee meetings or failing to perform their duties while
                providing no reason for absence in attendance or duties.{" "}
              </li>
              <li>
                The accused party(ies) of the Steering Committee shall not be
                present in any meetings discussing their supposed transgressions
                or the resolutions to follow any investigations they are
                involved in.{" "}
              </li>
              <li>
                Membership shall be notified in all cases of a change in the
                composition of the Steering Committee.
              </li>
            </ol>
          </li>
          <li>
            The duties of the Co-Chairs shall be:
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>To facilitate meetings.</li>
              <li>To reserve space for meetings, events, and tabling.</li>
              <li>
                To communicate with members of the YDSA National Coordinating
                Committee, staff, and members of YDSA’s national subcommittees.
              </li>
              <li>
                To attend any school functions mandatory for organization
                presidents.
              </li>
              <li>
                To write weekly updates to send via email to everyone on the
                organization’s email list.
              </li>
              <li>
                To appoint (an) interim Co-Chair(s) if they are unable to
                perform their duties to the best of their ability.
              </li>
            </ol>
          </li>
          <li>
            The duties of the Secretary shall be:
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>To take minutes at general meetings.</li>
              <li>
                To send meeting minutes to everyone on the organization’s email
                list with twenty-four (24) hours of a meeting’s end.
              </li>
              <li>
                To maintain a list of active members and build an email list.
              </li>
              <li>
                To send weekly to bi-weekly email updates written by the
                Co-Chairs to membership.
              </li>
            </ol>{" "}
          </li>
          <li>
            The duties of the Treasurer shall be:
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>To manage any funds of the organization.</li>
              <li>
                To maintain an active log of the chapter’s income and
                expenditures.
              </li>
              <li>To fill out school grant request forms when necessary.</li>
              <li>
                To serve as lead organizer for one (1) fundraiser per academic
                semester.
              </li>
            </ol>
          </li>
        </ol>
        <h2 className="uppercase text-xl font-black mt-8 mb-4">
          Article V. Funding
        </h2>
        <ol className="list-decimal list-outside ml-6 text-lg space-y-2">
          <li>
            The organization shall be funded through the following means:
            fundraisers, contributions and scholarships from Democratic
            Socialists of America, fundraisers, and any approved financial
            assistance granted by the school.
          </li>
          <li>All money transactions must be approved by the Treasurer.</li>
          <li>
            Any transaction made on the behalf of the Chapter must be
            pre-approved by the Treasurer and receipts must be kept by those
            making transactions and presented to the Treasurer after the
            transaction occurs.
          </li>
          <li>
            The Steering Committee shall maintain a record of all financial
            transactions and accounts. These records shall be made available at
            any time by the request of any YDSA national officer and will be
            reported regularly to the membership of the Chapter.{" "}
          </li>
        </ol>
        <h2 className="uppercase text-xl font-black mt-8 mb-4">
          Article VI. Meetings
        </h2>
        <ol className="list-decimal list-outside ml-6 text-lg space-y-2">
          <li>
            Regular meetings of the organization shall be held weekly. The day
            of the week and time will be determined at the beginning of every
            academic term.
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>
                Meeting times may be changed by two-thirds ({FRAC["23"]}) vote
                of membership.
              </li>
            </ol>
          </li>
          <li>
            Special meetings may be called by the Steering Committee. Votes and
            elections may not occur at such meetings.
          </li>
          <li>
            Agendas for general body and special meetings shall be prepared by
            the Steering Committee and will be available at the request of
            members before a meeting.
          </li>
          <li>
            Committees are required to meet at least once a month and are
            subject to the same guidelines laid out in line VI.1.
          </li>
          <li>
            The Steering Committee will meet weekly to set an agenda for the
            next general body meeting and discuss any necessary administrative
            tasks to ensure the Chapter functions effectively.
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>
                Every member of the Steering Committee will be required to
                attend unless they provide notice of their absence 24 hours in
                advance.
              </li>
              <li>
                All Steering Committee meetings will be made open to all Chapter
                members, including Committee Chairs, to attend and participate
                in.
              </li>
              <li>
                The time and day of Steering Committee meetings will be decided
                before the start of each academic term, according to a consensus
                of the entire Steering Committee, and communicated to the
                Chapter.
              </li>
              <li>
                Actions or decisions on behalf of the Chapter should not be
                taken during Steering Committee meetings.
              </li>
            </ol>
          </li>
          <li>
            A quorum for any meeting shall be one-half ({FRAC["12"]}) of
            members.
          </li>
        </ol>
        <h2 className="uppercase text-xl font-black mt-8 mb-4">
          Article VII. Powers
        </h2>
        <ol className="list-decimal list-outside ml-6 text-lg space-y-2">
          <li>
            The Chapter shall have committees created if deemed necessary by
            membership. The formation of such committees shall be approved by a
            two-thirds ({FRAC["23"]}) vote of the membership at a regular
            meeting.
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>
                Upon creation, committees must submit their charter laying out
                their responsibilities to membership and names of at least three
                (3) members who will start the committee.
              </li>
              <li>
                Committees will have two (2) co-chairs who will be elected by
                the general body in same fashion that steering is elected.
              </li>
              <li>
                Committees must have a minimum of three (3) members at all
                times.
              </li>
            </ol>
          </li>
          <li>
            The Chapter shall operate as a non-profit association and no profits
            may accrue to any individual within the organization.
          </li>
          <li>
            Unless otherwise provided in these bylaws, decisions of the
            organization shall be made by a simple majority of those present and
            voting, with those abstaining from the vote not figuring into the
            determination of the majority required.
          </li>
          <li>
            For purposes of any vote, the determination of the current eligible
            voting membership shall be private ballot (likely a folded index
            card or piece of paper). Votes will be counted immediately by the
            Steering Committee in the presence of members.
          </li>
          <li>
            The rules contained in the current edition of Robert’s Rules of
            Order Newly Revised shall govern the Chapter in all cases to which
            they are applicable and in which they are not inconsistent with this
            Constitution, the Bylaws, or standing rules of the organization.
          </li>
        </ol>
        <h2 className="uppercase text-xl font-black mt-8 mb-4">
          Article VIII. Amendment of Bylaws
        </h2>
        <ol className="list-decimal list-outside ml-6 text-lg space-y-2">
          <li>
            These bylaws may be amended at any regular meeting of the
            organization by a two-thirds ({FRAC["23"]}) vote, provided that the
            amendment has been submitted in writing to the Steering Committee at
            the previous regular meeting.{" "}
          </li>
        </ol>
        <h2 className="uppercase text-xl font-black mt-8 mb-4">
          Article IX. Harassment and Grievance Policy
        </h2>
        <ol className="list-decimal list-outside ml-6 text-lg space-y-2">
          <li>
            The chapter shall follow{" "}
            <a
              href="https://www.dsausa.org/about-us/harassment-policy-resolution-33/"
              className="text-primary hover:underline active:text-background-secondary transition-colors duration-300"
            >
              DSA’s Harassment Policy
            </a>{" "}
            and seek to uphold{" "}
            <a
              href="https://www.dsausa.org/dsa-code-of-conduct-for-members/"
              className="text-primary hover:underline active:text-background-secondary transition-colors duration-300"
            >
              DSA’s Code of Conduct
            </a>
            .
          </li>
          <li>
            The chapter shall provide a confidential method for chapter members
            to report grievances, through at least two (2) Harassment and
            Grievance Officers (HGOs).
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>
                To be eligible to serve as an HGO, candidates must be chapter
                members, receive a nomination from another chapter member, and
                go through a vetting process.
              </li>
              <li>
                The preferred names and contact information of HGOs shall be
                available at all times to chapter members and routinely shared
                at regular meetings.
              </li>
              <li>
                The chapter shall appoint HGOs to serve regular annual terms
                concurrent with the Steering Committee.
              </li>
              <li>
                The chapter shall aim to appoint members of marginalized
                communities to the HGO position.
              </li>
            </ol>
          </li>
          <li>
            The chapter’s grievance process shall aim to uphold principles of
            fairness, inclusivity and respect for all parties. The chapter HGO
            shall document each step of the process and report to the steering
            committee only when their decision on disciplinary action is
            necessary and confidentiality can be ensured.
          </li>
          <li>
            HGOs may be removed or suspended from their position by the Steering
            Committee, and may also be subject to a recall according to the same
            procedure which affects members of the Steering Committee.
            <ol className="list-[lower-alpha] list-outside ml-12 mt-2 text-lg space-y-2">
              <li>
                If a grievance is initiated against an HGO, the accused HGO must
                recuse themself from any ongoing or future grievance cases
                unless the Steering Committee determines that:
                <ol className="list-[lower-roman] list-outside ml-12 mt-2 text-lg space-y-2">
                  <li>
                    The claims within the grievance accusing the HGO are found
                    to be unsubstantial, retaliatory or otherwise would not
                    require a suspension or removal.
                  </li>
                  <li>
                    Limited capacity or other circumstantial concerns require
                    the continued participation of the accused HGO.
                  </li>
                </ol>
              </li>
              <li>
                HGOs may be suspended or removed for misuse of their power as
                HGO, biased practice, failure to acknowledge all evidence, or
                other conduct in violation of grievance process guidelines and
                values.
                <ol className="list-[lower-roman] list-outside ml-12 mt-2 text-lg space-y-2">
                  <li>
                    Membership shall be notified for all changes of HGO
                    membership.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            In the case of serious or pressing grievance allegations, the
            Steering Committee may authorize immediate, temporary suspensions of
            accused members, including those on the Steering Committee or HGOs,
            which may be overturned, extended, or otherwise altered after an
            investigation takes place.
          </li>
        </ol>
        <h2 className="uppercase text-xl font-black mt-8 mb-4">
          Article X. Dissolution Clause{" "}
        </h2>
        <ol className="list-decimal list-outside ml-6 text-lg space-y-2">
          <li>
            Should the organization be dissolved due to lack of interest or
            other reasons, it is the responsibility of the current president to
            notify Drexel University Campus Engagement that they have disbanded
            and provide reason. The treasurer is responsible for ensuring all
            fundraising dollars go to Democratic Socialists of America and
            notifying Drexel University Campus Engagement that any allocated
            funding left will not be used.
          </li>
        </ol>
      </div>
    </PageLayout>
  );
}
