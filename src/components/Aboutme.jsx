import Nav from "./Nav";

function Aboutme({ className = "" }) {
  return (
    <div className="${className}">
      <div className="aboutme-container text-justify tracking-widest">
        <h2 className="subtitle neon p-4">Hi There</h2>
        <p className="p-1">
          My name is Marcelo Holgado da Silva. I am a Computer Engineering
          graduate from Pontifícia Universidade Católica do Rio Grande do Sul
          (PUCRS).
        </p>
        <br></br>
        <p className="p-1">
          I'm passionate about creating innovative solutions through software. I
          enjoy working across the full spectrum of software development—from
          building interactive and elegant web interfaces to designing and
          implementing efficient and scalable backend systems.
        </p>
        <br></br>
        <p className="p-1">
          I thrive on turning ideas into working technology and always look for
          ways to improve the user experience and performance of the
          applications I build. In addition to my professional work, I often
          dedicate my free time to personal projects, especially those involving
          automation, 3D graphics, or learning new frameworks and technologies.
        </p>
        <br></br>
        <p>
          One such hobby project is this web page, where I experimented with
          various concepts and pushed my technical boundaries for fun and
          growth. Technology is not just a career for me it's a passion and a
          craft that I'm constantly refining.
        </p>
        <h3 className="subtitle neon pt-10 pb-5">My work experience</h3>
        <h4 className="neonl pb-4">Junior Developer - 2022 - 2023</h4>
        <p>
          I joined the ClearVision team as a Junior Developer during the early
          stages of the project's development (version 0.0). ClearVision is an
          Enhanced Flight Vision System (EFVS) developed by Universal Avionics,
          designed to enhance flight safety and efficiency through advanced
          visualization and configuration tools for complex hardware
          environments.
        </p>
        <br></br>
        <p>
          The system is developed primarily in C and runs on a target
          environment with Wind River OS, while development and testing are
          performed on Windows PCs Our initial objectives were to write
          automated tests, improve code coverage, and implement pull request
          (PR) features to ensure the system's stability and readiness for
          future development.
        </p>
        <br></br>
        <p>
          I actively contributed to increasing test coverage by identifying
          missing scenarios and writing effective test cases in C. I also
          assisted in developing new features for the initial release of
          ClearVision. Leveraging my experience with Python automation, I
          created a script that quickly modifies system configuration files,
          allowing developers to update ClearVision settings much faster than
          manual edits on Windows. This tool automates configuration changes on
          the development PC, streamlining interaction with the target
          environment.
        </p>
        <h4 className="neonl pb-4 pt-4">Mid-level Developer - 2022 - 2024</h4>
        <p className="p-1">
          After being promoted to a mid-level developer, I continued working on
          ClearVision. I was also assigned to work with a second team in the
          company that handled system-level validation and requirements
          engineering in C++.
        </p>
        <br></br>
        <p className="p-1">
          My first responsibility as a mid-level developer was to improve the
          usability of the Python configuration tool. The team needed real-time
          visual feedback to ensure that configuration changes were correctly
          applied to the ClearVision configuration files. Later, I was tasked
          with supporting the other team in a parallel project by helping with
          requirement verification and writing system tests based on
          undocumented code.
        </p>
        <br></br>
        <p className="p-1">
          I integrated the Python configuration tool with the ClearVision
          software using a custom library, enabling real-time communication
          between the tool and the embedded software. This allowed users to
          immediately visualize the configured symbology within the EFVS
          interface, improving usability and reducing misconfiguration risk. In
          the second team, I used my knowledge of C++ and reverse engineering to
          analyze undocumented code. I wrote precise software requirements based
          on code behavior and created corresponding system-level tests to
          verify functionality and ensure compliance. I also reported and
          documented several logic flaws and inconsistencies found during this
          process.
        </p>
        <br></br>
        <p className="p-1">
          The new communication layer made the configuration process much more
          intuitive and transparent, which significantly improved the
          development team’s efficiency and reduced misconfiguration incidents.
          In the second team, my work helped recover critical undocumented
          functionalities, improved test coverage, and contributed to the
          creation of new formal software documentation and quality assurance
          assets.
        </p>
        <h4 className="neonl pb-4 pt-4">Senior Developer - 2025</h4>
        <p className="p-1">
          The ClearVision project, developed by Universal Avionics, provides
          advanced vision systems for pilots to enhance situational awareness
          during low-visibility conditions. Our team was responsible for
          verifying software reliability and improving automated testing. As a
          senior developer, I was responsible for maintaining and expanding the
          test automation infrastructure, supporting team members in
          understanding tools, and ensuring smooth and consistent delivery of
          software validations.
        </p>
        <br></br>
        <p className="p-1">
          I Developed a C++ tool using OpenCV to capture real-time video and
          screenshots during automated test execution. Maintained and improved a
          C# test automation system, fixing bugs and automating routine
          procedures. Documented key software components to improve team
          onboarding and system understanding. Led Scrum ceremonies to ensure
          the team’s alignment on deliverables and priorities. Supported
          teammates with technical guidance and troubleshooting.
        </p>
        <br></br>
        <p className="p-1">
          As Result I Significantly reduced the time required for test
          validation. Improved test coverage and traceability through automation
          and video capture. Enabled faster and more efficient onboarding for
          new developers. Strengthened team collaboration and productivity by
          streamlining Scrum processes. Ensured that all test executions were
          fully traceable and visually documented.
        </p>
        <h4 className="neonl pb-4 pt-4">
          Support analist at TOTVS - 2021 - 2022
        </h4>
        <p className="p-1">
          TOTVS is a leading Brazilian software company providing business
          solutions (ERPs) across several industries. I worked as a Level 1
          Support Analyst, responsible for helping clients resolve issues
          related to the company’s ERP systems. Although my primary role was
          front-line support, I often went beyond basic duties, becoming the
          go-to person for solving complex problems, identifying system bugs,
          and ensuring customer satisfaction.
        </p>
        <br></br>
        <p className="p-1">
          Using browser inspection tools (DevTools), I diagnosed issues in real
          time, discovered frontend bugs, and reported them directly to the
          development team with precise technical details. I also created a
          Python script to automate an internal process: our internal system
          lacked reporting features, so I developed a script that navigated the
          system interface automatically, classified clients (active/inactive),
          and generated structured reports for the sales team.
        </p>
        <br></br>
        <p className="p-1">
          This significantly improved internal efficiency and decision-making. I
          was recognized as a standout performer on the support team for my
          proactive approach and technical contributions. My debugging helped
          reduce resolution time, and the Python automation streamlined internal
          operations, providing strategic insights for the sales department.
        </p>
        <h4 className="neonl pb-4 pt-4">Intern at Sisnema - 2019 - 2021</h4>
        <p className="p-1">
          Sisnema Informática is a Brazilian company specializing in IT training
          and professional development. They offer a wide range of technical
          courses and certifications, as well as IT infrastructure solutions and
          services for clients throughout Brazil.
        </p>
        <br></br>
        <p className="p-1">
          When I started my internship at Sisnema Informática, one of the main
          challenges was configuring student lab computers with the necessary
          virtual hard drives (VHDs) for each course. The process was entirely
          manual, requiring us to install the VHDs on each machine individually,
          which was extremely time-consuming.
        </p>
        <br></br>
        <p className="p-1">
          Our goal was to automate this installation process in order to save
          time and allow the team to focus on other important areas, such as
          hardware maintenance and internal tool development.
        </p>
        <br></br>
        <p className="p-1">
          I began by developing a PowerShell script that automated the VHD
          installation and attachment process on each student computer. Then,
          working with the team, we created an enhanced script that allowed the
          instructor’s machine to remotely send and attach the VHDs to all
          student machines simultaneously, further streamlining the setup.
          <br></br>
          With the time saved, I also contributed to other projects, including
          building a simple internal monitoring website using PHP and Python.
          This site displayed the internet connection status of our clients in
          real-time, helping the support team quickly determine whether a
          connection issue was internal or external.
        </p>
        <br></br>
        <p className="p-1">
          The automation significantly reduced the time required to prepare
          classroom computers, increased team efficiency, and improved client
          support responsiveness. The monitoring site became an essential tool
          for our technical support workflow.
        </p>
        <h4 className="neonl pb-4 pt-4">Research at GAPH - 2018 - 2019</h4>
        <p className="p-1">
          At PUCRS University, I joined a research group focused on improving
          fault recovery methods in MPSoCs (Multi-Processor Systems-on-a-Chip),
          which are systems with multiple processing elements often used in
          high-performance computing and embedded applications.<br></br>My
          responsibility was to evaluate how the system behaved under different
          fault conditions and assess the effectiveness of our recovery
          protocols.
        </p>
        <br></br>
        <p className="p-1">
          I designed fault injection scenarios targeting specific Processing
          Elements (PEs) and observed the response of the recovery mechanisms. I
          documented metrics such as recovery time, system stability, and
          whether the application completed successfully after recovery. The
          system was developed primarily in C, with SystemC used for modeling
          high-level hardware behavior in C++.
        </p>
        <br></br>
        <p className="p-1">
          I worked in a Linux-based environment and used ModelSim for waveform
          analysis and debugging during and after faults. We used SVN for
          version control, and I collaborated closely with PhD researchers to
          analyze results and refine the recovery approach.
        </p>
        <br></br>
        <p className="p-1">
          My work helped validate and improve the system's fault tolerance,
          ensuring higher reliability in MPSoC environments. Additionally, I
          contributed to the publication of a scientific paper, reinforcing the
          practical and academic value of the research.
        </p>
        <h4 className="neonl pb-4 pt-4">Junior Trainee - 2014 - 2015</h4>
        <p className="p-1">
          At the age of 16, I began my career as a trainee receptionist at a
          hotel. This role significantly helped me develop my soft skills, as I
          interacted daily with guests from different parts of the world. In
          2014, during the FIFA World Cup held in Brazil, the hotel welcomed a
          large number of international visitors.
        </p>
        <br></br>
        <p className="p-1">
          I had the opportunity to assist and communicate with guests from
          diverse cultures, which greatly improved my communication skills and
          confidence in speaking English. I chose this job as part of a
          technical course requirement, where I was able to both practice and
          enhance my English in a real-world setting.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
