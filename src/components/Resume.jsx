import React from "react";

export const Resume = () => {
  return (
    <div className="container ResumeSec ">
      <h3> Resume</h3>
      <h2>Combination of Skill & Education Qualification</h2>

      <div className="row d-flex">
        <div className="col-md-6 EDUSEC ">
          <h1>Education</h1>
          <div className=" inst d-flex">
            <div className="degreename col-md-8">
              <h4>Bachelor's Degree</h4>
              <span>Institute: SHAHADOWLA GOVT. COLLAGE</span>
              <br /> <span>Year: 2nd Year</span>
            </div>

            <div className="btndv col-md-4">
              <button className="butn">Running</button>
            </div>
          </div>

          <div className=" inst  d-flex">
            <div className="degreename col-md-8">
              <h4>Higher Secondary School Certificate (H.S.C)</h4>
              <span>Institute: SHAHADOWLA GOVT. COLLAGE</span>
              <br />
              <span>Group: Arts</span>
              <br />
              <span>Board: Rajshahi</span>
            </div>

            <div className="btndv col-md-4">
              <button className="butn">2020-2021</button>
            </div>
          </div>

          <div className=" inst  d-flex">
            <div className="degreename col-md-8">
              <h4>Secondary School Certificate (S.S.C)</h4>
              <span> Institute: KALIDASH KHALI HIGH SCHOOL</span>
              <br />
              <span>Group: Arts</span>
              <br />
              <span>Board: Rajshahi</span>
            </div>

            <div className="btndv col-md-4">
              <button className="butn">2019-2020</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 SKILSEC">
          <h1>Skils</h1>
          {/* <div className="row gap-4">
            <div className="col-md-6 CRD"> 
                <h2>Programming Languages</h2>

                <p>Python</p>
                <p>C</p>
                <p>C++</p>
                <p>Javascript</p>

            </div>
            <div className="col-md-6 CRD"> 
                <h2>Frameworks & Libraries</h2>

               
                <p>React</p>
                <p>Nodejs</p>
                <p>Expressjs</p>
                <p>Django</p>
                <p>REST Framework (DRF) </p>

            </div>

            <div className="col-md-6 CRD"> 
                <h2>Databases</h2>

               
                <p>SQLite</p>
                <p>MongoDB</p>
                <p>PostgreSQL</p>
                <p>MySQL</p>
             

            </div>


            <div className="col-md-6 CRD"> 
                <h2> CP Skills</h2>

               
                <p>Data Structures</p>
                <p>Algorithms</p>
                <p>Complexity Analysis</p>
                
             

            </div>
        </div> */}

          <div className="row gap-4 crdcenter ">
            <div className="col-md-5 col-sm-10 CRD">
              <h2>Programming Languages</h2>
              <p>Python</p>
              <p>C</p>
              <p>C++</p>
              <p>Javascript</p>
            </div>
            <div className="col-md-5 col-sm-10 CRD">
              <h2>Frameworks & Libraries</h2>
              <p>React</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>Django</p>
              <p>REST Framework (DRF)</p>
            </div>
            <div className="col-md-5 col-sm-10 CRD">
              <h2>Databases</h2>
              <p>SQLite</p>
              <p>MongoDB</p>
              <p>PostgreSQL</p>
              <p>MySQL</p>
            </div>
            <div className="col-md-5 col-sm-10 CRD">
              <h2>CP Skills</h2>
              <p>Data Structures</p>
              <p>Algorithms</p>
              <p>Complexity Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
