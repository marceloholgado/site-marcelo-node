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
          I joined the ClearVision team as a Junior Developer during version 0.0
          of the project. ClearVision is an Enhanced Flight Vision System (EFVS)
          by Universal Avionics. It improves flight safety using advanced
          visualization and configuration tools for complex hardware.
        </p>
        <br></br>
        <p>
          The system is developed in C and runs on Wind River OS, while
          development/testing happens on Windows PCs. Our focus was on creating
          automated tests and improving code coverage. We also implemented pull
          request features to support system stability and future growth.
        </p>
        <br></br>
        <p>
          I helped increase test coverage by identifying gaps and writing C test
          cases. I contributed to early feature development and created a Python
          script to automate configuration file updates. This tool sped up
          setting changes, improving development efficiency.
        </p>
        <h4 className="neonl pb-4 pt-4">Mid-level Developer - 2022 - 2024</h4>
        <p className="p-1">
          After being promoted to mid-level developer, I continued working on
          ClearVision. I also joined a second team focused on system-level
          validation. My work involved both C++ development and requirements
          engineering.
        </p>
        <br></br>
        <p className="p-1">
          My initial task was improving the Python configuration tool with
          real-time feedback. Later, I supported the second team by verifying
          requirements and writing tests. This included working with
          undocumented legacy code.
        </p>
        <br></br>
        <p className="p-1">
          I integrated the tool with ClearVision using a custom library for live
          symbology visualization. This reduced misconfigurations and improved
          usability. In the second team, I reverse engineered code, defined
          requirements, wrote tests, and reported logic flaws.
        </p>
        <h4 className="neonl pb-4 pt-4">Senior Developer - 2025</h4>
        <p className="p-1">
          As a senior developer, I maintained infrastructure and supported
          consistent software validation delivery.
        </p>
        <br></br>
        <p className="p-1">
          We built a C++ tool with OpenCV to capture videos and screenshots
          during tests. Improved a C# automation system by fixing bugs and
          streamlining tasks. We also documented key components and led Scrum
          ceremonies to guide the team effectively.
        </p>
        <br></br>
        <p className="p-1">
          As a result, test validation became faster and more traceable.
          Automation and video capture improved coverage and onboarding. Scrum
          leadership and documentation boosted team collaboration and
          productivity.
        </p>
        <h4 className="neonl pb-4 pt-4">
          Support analist at TOTVS - 2021 - 2022
        </h4>
        <p className="p-1">
          TOTVS is a top Brazilian ERP provider, where I worked as a Level 1
          Support Analyst. I helped clients resolve ERP-related issues and often
          took on complex technical challenges. I became a key resource for
          identifying bugs and ensuring customer satisfaction.
        </p>
        <br></br>
        <p className="p-1">
          I used browser DevTools to diagnose frontend issues and reported them
          with detailed insights. To solve a reporting gap, I built a Python
          script that navigated the system, classified clients, and generated
          sales reports. This tool automated a critical internal task.
        </p>
        <br></br>
        <p className="p-1">
          The automation improved efficiency and supported better sales
          decisions. I was recognized for my initiative and technical skills. My
          contributions reduced issue resolution time and added value beyond the
          traditional support role.
        </p>
        <h4 className="neonl pb-4 pt-4">Intern at Sisnema - 2019 - 2021</h4>
        <p className="p-1">
          Sisnema Informática is a Brazilian company focused on IT training and
          infrastructure solutions. They offer technical courses,
          certifications, and services across Brazil. I joined the company as an
          intern to support their technical operations.
        </p>
        <br></br>
        <p className="p-1">
          One key challenge was manually installing virtual hard drives (VHDs)
          on each student lab computer. This process was slow and repetitive,
          limiting the team’s ability to focus on other tasks. Our goal was to
          automate it to save time and improve efficiency.
        </p>
        <br></br>
        <p className="p-1">
          I created a PowerShell script to automate VHD installation and later
          enhanced it for remote deployment. This freed up time for other tasks,
          like building a monitoring site in PHP/Python. The automation and
          tools I developed improved classroom prep and client support.
        </p>
        <h4 className="neonl pb-4 pt-4">Research at GAPH - 2018 - 2019</h4>
        <p className="p-1">
          At PUCRS University, I joined a research group focused on fault
          recovery in MPSoCs. These systems use multiple processors in
          high-performance and embedded applications. My role was to evaluate
          system behavior under fault conditions and test recovery protocols.
        </p>
        <br></br>
        <p className="p-1">
          We created fault injection scenarios targeting specific processing
          elements (PEs). Metrics like recovery time and system stability were
          documented. The project used C for implementation and SystemC for
          high-level hardware modeling.
        </p>
        <br></br>
        <p className="p-1">
          Working in a Linux environment, We used ModelSim for debugging and
          waveform analysis. I collaborated with PhD researchers and used SVN
          for version control. My work improved system reliability and
          contributed to a published scientific paper.
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
