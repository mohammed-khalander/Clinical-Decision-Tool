// import React from 'react'


// import { useState, useEffect, useContext, useRef } from 'react';

// import { AppContext } from '../Contexts/AppContext';


// import { toast } from 'react-toastify';


// import './CSS/PatientDetails.css';


// import Footer from '../Components/Footer';



// const PatientDetails = () => {


//     const { patientData, backend_URL } = useContext(AppContext);


//   const [editState,setEditState] = useState(false);

//   const [patientDetailsBackEnd,setPatientDetailsBackEnd] = useState([]);  //patientDetailsBackEnd from backend


//   const [patientDetails,setPatientDetails] = useState({
//     age:"", 
//     gender:"", 
//     height:"", 
//     weight:"", 
//     BMI:"", 
//     diabetes_duration:"", 
//     hba1c:"", 
//     fasting_blood_glucose:"", 
//     postprandial_glucose:"", 
//     c_peptide:"", 
//     sbp:"", 
//     dbp:"", 
//     total_cholesterol:"", 
//     triglycerides:"", 
//     ldl_cholesterol:"", 
//     hdl_cholesterol:"",
//     serum_creatinine:"", 
//     estimated_GFR:"", 
//     urinary_albumin_creatinine_ratio:"", 
//     smoking_status:"", 
//     alcohol_consumption:"", 
//     medications:"", 
//     metformin_usage:"", 
//     lipid_lowering_drugs:""
//   });



//   const handleInputChange = (evt)=>{
//     const name = evt.target.name;
//     const value = evt.target.value;

//     setPatientDetails((prev)=>{
//       return {...prev,[name]:value};
//     })

//   }

//   const handleSubmit = async(evt)=>{
//     evt.preventDefault();
    
//     try{

//       console.log(patientDetails);

//         const fetchOptions = {
//             method:"POST",
//             credentials:"include",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(patientDetails),
//         }


        


//         const response = await fetch(`${backend_URL}/api/patient/regesterDetails`,fetchOptions);
//         const data = await response.json();

//         if(data.success){
//             toast.success(data.message);
//             fetchPatientDetails();
//         }else{
//             console.log(`Error In submiting patient Details Front-End ${data.message}`);
//             toast.error(data.message);
//         }



//     }catch(error){
//       console.log("Error In Front-End Handling Input of Patients ",error);
//       toast.error(`Error In Front-End Handling Input of Patients ${error}`);
//     }

//     setEditState(false);

//   }


//   const fetchPatientDetails = async (evt)=>{
//     try{

//         const fetchOptions = {
//             method:"GET",
//             credentials:"include"
//         }
        
//         const response = await fetch(`${backend_URL}/api/patient/getPatientInputDetails`,fetchOptions);
//         const data = await response.json();
//         console.log(data);
//         if(data.success){
//             setPatientDetailsBackEnd(data.message[0]);
//             console.log(data);
//         }else{
//             toast.error(data.message);
//         }


//     }catch(error){
//         console.log("Error In Front-End Fetching Patients Details ",error);
//         toast.error(`Error In Front-End Handling Input of Patients ${error}`);
//     }
//   }


//   useEffect(()=>{ 
//     // console.log(patientData);
//     if(patientData?.isDetailsFilled){
//         fetchPatientDetails();
//     }
//   },[patientData]);



// //   if(editState){
//   if(!patientData?.isDetailsFilled || editState){
    

//   return (
    
//     <div className='patient-details-container'>
//         <div className="edit-button flex items-center justify-between" style={{padding:"0 10px",height:"60px"}}>

//         <h1 className='h-max'> Patient Details </h1>

//         {/* <button style={{margin:0,padding:0,height:"50px",width:"80px",textAlign:"center"}}> Edit </button> */}
//         </div>

//       <form onSubmit={handleSubmit}>



//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> Age </p>
//                 <input type="Number" name="age" id="age" placeholder='Enter Your Age' required value={patientDetails.age} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> Gender </p>
//                 {/* <input type="Number" name="fullName" id="name" placeholder='Name'/> */}
//                 <select name="gender" id="gender" value={patientDetails.gender} onChange={handleInputChange} required > 
//                   <option value=""> Not Selected </option>  
//                   <option value="Male"> Male </option>
//                   <option value="FeMale"> FeMale </option>
//                   <option value="Others"> Others </option>
//                 </select>
//             </div>

//          </div>

         


//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> Height </p>
//                 <input type="Number" name="height" id="height" placeholder='Enter Your Height' required value={patientDetails.height} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> Weight </p>
//                 <input type="Number" name="weight" id="weight" placeholder='Enter Your Weight' required value={patientDetails.weight} onChange={handleInputChange} />
//             </div>

//          </div>




//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> BMI </p>
//                 <input type="Number" name="BMI" id="BMI" placeholder='Enter Your Body Mass Index' required value={patientDetails.BMI} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> Diabetic Duration (In Years) </p>
//                 <input type="Number" name="diabetes_duration" id="diabetes_duration" placeholder='Enter Your Diabetes Duration' required value={patientDetails.diabetes_duration} onChange={handleInputChange} />
//             </div>

//          </div>



       

//         {/* <div className="pateint-input-container">

//             <div className="feild">
//                 <p> HBA1C (In Percentage) </p>
//                 <input type="Number" name="hba1c" id="hba1c" placeholder='Enter hba1c' required value={patientDetails.hba1c} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> Fasting Blood Glucose Level (mg/dL) </p>
//                 <input type="Number" name="fasting_blood_glucose" id="fasting_blood_glucose" placeholder='Blood sugar after fasting' required value={patientDetails.fasting_blood_glucose} onChange={handleInputChange} />
//             </div>

//          </div> */}



//          <h1> Bio-Chemical And Clinical Inputs </h1>

//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> HBA1C (In Percentage) </p>
//                 <input type="Number" name="hba1c" id="hba1c" placeholder='Enter hba1c' required value={patientDetails.hba1c} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> Fasting Blood Glucose Level (mg/dL) </p>
//                 <input type="Number" name="fasting_blood_glucose" id="fasting_blood_glucose" placeholder='Blood sugar after fasting' required value={patientDetails.fasting_blood_glucose} onChange={handleInputChange} />
//             </div>

//          </div>



       

//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> Postprandial Glucose (mg/dL) </p>
//                 <input type="Number" name="postprandial_glucose" id="postprandial_glucose" placeholder='Enter Postprandial Glucose' required value={patientDetails.postprandial_glucose} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> C Peptide (ng/mL) </p>
//                 <input type="Number" name="c_peptide" id="c_peptide" placeholder='C Peptide' required value={patientDetails.c_peptide} onChange={handleInputChange} />
//             </div>

//          </div>



       

//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> Systolic BP (mmHg) </p>
//                 <input type="Number" name="sbp" id="sbp" placeholder='Enter Systolic BP' required value={patientDetails.sbp} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> Diastolic BP (mmHg) </p>
//                 <input type="Number" name="dbp" id="dbp" placeholder='Enter Diastolic BP' required value={patientDetails.dbp} onChange={handleInputChange} />
//             </div>

//          </div>


//         <h1> Lipid Profile Inputs </h1>




       

//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> Total Cholesterol (mg/dL) </p>
//                 <input type="Number" name="total_cholesterol" id="total_cholesterol" placeholder='Enter Total Cholesterol Level' required value={patientDetails.total_cholesterol} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> Triglycerides (mg/dL) </p>
//                 <input type="Number" name="triglycerides" id="triglycerides" placeholder='Enter Triglycerides' required value={patientDetails.triglycerides} onChange={handleInputChange} />
//             </div>

//          </div>



       

//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> LDL Cholesterol (mg/dL) </p>
//                 <input type="Number" name="ldl_cholesterol" id="ldl_cholesterol" placeholder='Enter The Level of Bad Cholesterol' required value={patientDetails.ldl_cholesterol} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> HDL cholesterol (mg/dL) </p>
//                 <input type="Number" name="hdl_cholesterol" id="hdl_cholesterol" placeholder='Enter The Level of Good Cholesterol' required value={patientDetails.hdl_cholesterol} onChange={handleInputChange} />
//             </div>

//          </div>



//             <h1> Kidney Function Inputs (Renal Markers) </h1>




       

//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> Serum Creatinine (mg/dL) </p>
//                 <input type="Number" name="serum_creatinine" id="serum_creatinine" placeholder='Enter Serum Creatinine Level' required value={patientDetails.serum_creatinine} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> Estimated GFR (mL/min/1.73m²) </p>
//                 <input type="Number" name="estimated_GFR" id="estimated_GFR" placeholder='Enter Estimated GFR Rate' required value={patientDetails.estimated_GFR} onChange={handleInputChange} />
//             </div>

//          </div>



       

//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> Urinary Albumin Creatinine Ratio (mg/g) </p>
//                 <input type="Number" name="urinary_albumin_creatinine_ratio" id="urinary_albumin_creatinine_ratio" placeholder='Enter Urinary Albumin Creatinine Ratio' required value={patientDetails.urinary_albumin_creatinine_ratio} onChange={handleInputChange}/>
//             </div>


//          </div>



        

//         <h1> Life Style Factors </h1>

       

//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> Do You Smoke </p>
//                 <select name="smoking_status" id="smoking_status" value={patientDetails.smoking_status} onChange={handleInputChange} required> 
//                   <option value=""> Not Selected </option>  
//                   <option value="true"> Yes </option>
//                   <option value="false"> No </option>
//                 </select>
//             </div>

//             <div className="feild">
//                 <p> Do You Consume Alcohol </p>
//                 <select name="alcohol_consumption" id="alcohol_consumption" value={patientDetails.alcohol_consumption} onChange={handleInputChange} required> 
//                   <option value=""> Not Selected </option>  
//                   <option value="true"> Yes </option>
//                   <option value="false"> No </option>
//                 </select>
//             </div>

//          </div>



//          <h1> Medications Usage </h1>

       

//         <div className="pateint-input-container">

//             <div className="feild">
//                 <p> Medications </p>
//                 <select name="medications" id="medications" value={patientDetails.medications} onChange={handleInputChange} required > 
//                   <option value=""> Not Selected </option>  
//                   <option value="Metformin"> Metformin </option>
//                   <option value="Insulin"> Insulin </option>
//                   <option value="Statins"> Statins </option>
//                 </select>
//             </div>

//             <div className="feild">
//                 <p> Do You Use Metformin </p>
//                 <select name="metformin_usage" id="metformin_usage" value={patientDetails.metformin_usage} onChange={handleInputChange} required > 
//                   <option value=""> Not Selected </option>  
//                   <option value="true"> Yes </option>
//                   <option value="false"> No </option>
//                 </select>
//             </div>

//          </div>

       

//         <div className="pateint-input-container">


//             <div className="feild">
//                 <p> Do You Use Cholesterol Medications </p>
//                 <select name="lipid_lowering_drugs" id="lipid_lowering_drugs" value={patientDetails.lipid_lowering_drugs} onChange={handleInputChange} required> 
//                   <option value=""> Not Selected </option>  
//                   <option value="true"> Yes </option>
//                   <option value="false"> No </option>
//                 </select>
//             </div>

//          </div>




//     <button style={{marginBottom:"10px",marginTop:"50px"}}> Submit Details </button>


// {
//   /**
//    *   const [patientDetails,setPatientDetails] = useState({
//     age:"", 
//     gender:"", 
//     height:"", 
//     weight:"", 
//     BMI:"", 

//     diabetes_duration:"", 

//     hba1c:"", 
//     fasting_blood_glucose:"", 
//     postprandial_glucose:"", 
//     c_peptide:"", 
//     sbp:"", 
//     dbp:"", 

//     total_cholesterol:"", 
//     triglycerides:"", 
//     ldl_cholesterol:"", 
//     hdl_cholesterol:"",

//     serum_creatinine:"", 
//     estimated_GFR:"", 
//     urinary_albumin_creatinine_ratio:"", 

//     smoking_status:"", 
//     alcohol_consumption:"", 

//     medications:"", 
//     metformin_usage:"", 
//     lipid_lowering_drugs:""

//   });
//    */
// }

//       </form>



//     <Footer/>

//     </div>
//   )


//   } else{


//  return (
    
//     <div className='patient-details-container'>
//         <div className="edit-button flex items-center justify-between" style={{padding:"0 10px",height:"60px"}}>

//         <h1 className='h-max'> Patient Details </h1>

//         <button style={{margin:0,padding:0,height:"50px",width:"80px",textAlign:"center"}} onClick={()=> setEditState(true)}> Edit </button>
//         </div>

//       <div className='show-details'>



//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> Age : </p>
//                 <span> { patientDetailsBackEnd?.age || "N/A"} </span>
//             </div>

//             <div className="feild-1">
//                 <p> Gender : </p>
//                 <span>  { patientDetailsBackEnd?.gender || "N/A"} </span>
//             </div>

//          </div>

         


//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> Height (cm) : </p>
//                 <span>  { patientDetailsBackEnd?.height || "N/A"}  </span>
//             </div>

//             <div className="feild-1">
//                 <p> Weight (KG) : </p>
//                 <span>  { patientDetailsBackEnd?.weight || "N/A"}  </span>
//             </div>

//          </div>


//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> BMI </p>
//                 <span>  { patientDetailsBackEnd?.BMI || "N/A"} </span>
//             </div>

//             <div className="feild-1">
//                 <p> Diabetic Duration (In Years) </p>
//                 <span>  { patientDetailsBackEnd?.diabetes_duration || "N/A"}  </span>
//             </div>

//          </div>



       

//         {/* <div className="pateint-input-container">

//             <div className="feild">
//                 <p> HBA1C (In Percentage) </p>
//                 <input type="Number" name="hba1c" id="hba1c" placeholder='Enter hba1c' required value={patientDetails.hba1c} onChange={handleInputChange}/>
//             </div>

//             <div className="feild">
//                 <p> Fasting Blood Glucose Level (mg/dL) </p>
//                 <input type="Number" name="fasting_blood_glucose" id="fasting_blood_glucose" placeholder='Blood sugar after fasting' required value={patientDetails.fasting_blood_glucose} onChange={handleInputChange} />
//             </div>

//          </div> */}



//          <h1> Bio-Chemical And Clinical Inputs </h1>

//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> HBA1C (In Percentage) :  </p>
//                 <span>  { patientDetailsBackEnd?.hba1c || "N/A"} </span>
//             </div>

//             <div className="feild-1">
//                 <p> Fasting Blood Glucose Level (mg/dL) :  </p>
//                 <span>  { patientDetailsBackEnd?.fasting_blood_glucose || "N/A"} </span>
//             </div>

//          </div>



       

//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> Postprandial Glucose (mg/dL) : </p>
//                 <span>  { patientDetailsBackEnd?.postprandial_glucose || "N/A"} </span>
//             </div>

//             <div className="feild-1">
//                 <p> C Peptide (ng/mL) : </p>
//                 <span>  { patientDetailsBackEnd?.c_peptide || "N/A"} </span>
//             </div>

//          </div>



       

//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> Systolic BP (mmHg) : </p>
//                 <span>  { patientDetailsBackEnd?.sbp || "N/A"} </span>
//             </div>

//             <div className="feild-1">
//                 <p> Diastolic BP (mmHg) : </p>
//                 <span>  { patientDetailsBackEnd?.dbp || "N/A"} </span>
//             </div>

//          </div>


//         <h1> Lipid Profile Inputs </h1>


       

//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> Total Cholesterol (mg/dL) : </p>
//                 <span>  { patientDetailsBackEnd?.total_cholesterol || "N/A"} </span>
//             </div>

//             <div className="feild-1">
//                 <p> Triglycerides (mg/dL) : </p>
//                 <span>  { patientDetailsBackEnd?.triglycerides || "N/A"} </span>
//             </div>

//          </div>



       

//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> LDL Cholesterol (mg/dL) : </p>
//                 <span>  { patientDetailsBackEnd?.ldl_cholesterol || "N/A"} </span>
//             </div>

//             <div className="feild-1">
//                 <p> HDL cholesterol (mg/dL) : </p>
//                <span>  { patientDetailsBackEnd?.hdl_cholesterol || "N/A"} </span>
//             </div>

//          </div>



//             <h1> Kidney Function Inputs (Renal Markers) </h1>




       

//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> Serum Creatinine (mg/dL) : </p>
//                 <span> { patientDetailsBackEnd?.serum_creatinine || "N/A"} </span>
//             </div>

//             <div className="feild-1">
//                 <p> Estimated GFR (mL/min/1.73m²) : </p>
//                 <span> { patientDetailsBackEnd?.estimated_GFR || "N/A"} </span>
//             </div>

//          </div>



       

//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> Urinary Albumin Creatinine Ratio (mg/g) : </p>
//                 <span> { patientDetailsBackEnd?.urinary_albumin_creatinine_ratio || "N/A"} </span>
//             </div>


//          </div>



        

//         <h1> Life Style Factors </h1>

       

//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p>  Smoking Status : </p>
//                 <span> { patientDetailsBackEnd?.smoking_status || "N/A"} </span>
//             </div>

//             <div className="feild-1">
//                 <p> Alcohol Status : </p>
//                 <span> { patientDetailsBackEnd?.alcohol_consumption? "Yes": "N/A"} </span>
//             </div>

//          </div>



//          <h1> Medications Usage </h1>


// {
//     /**
//      * age:"", 
//     gender:"", 
//     height:"", 
//     weight:"", 
//     BMI:"", 
//     diabetes_duration:"", 
//     hba1c:"", 
//     fasting_blood_glucose:"", 
//     postprandial_glucose:"", 
//     c_peptide:"", 
//     sbp:"", 
//     dbp:"", 
//     total_cholesterol:"", 
//     triglycerides:"", 
//     ldl_cholesterol:"", 
//     hdl_cholesterol:"",
//     serum_creatinine:"", 
//     estimated_GFR:"", 
//     urinary_albumin_creatinine_ratio:"", 
//     smoking_status:"", 
//     alcohol_consumption:"", 
//     medications:"", 
//     metformin_usage:"", 
//     lipid_lowering_drugs:""
//      */
// }



       

//         <div className="pateint-input-container">

//             <div className="feild-1">
//                 <p> Medications : </p>
//                 <span> { patientDetailsBackEnd?.medications || "N/A"}  </span>
//             </div>

//             <div className="feild-1">
//                 <p>  Usag Of Metformin : </p>
//                 <span>  { patientDetailsBackEnd?.metformin_usage || "N/A"} </span>
//             </div>

//          </div>

       

//         <div className="pateint-input-container">


//             <div className="feild-1">
//                 <p> Usag Of Cholesterol Medications : </p>
//                 <span>  { (patientDetailsBackEnd?.lipid_lowering_drugs && "Yes") || "N/A"} </span>
//             </div>

//          </div>





// {
//   /**
//    *   const [patientDetails,setPatientDetails] = useState({
//     age:"", 
//     gender:"", 
//     height:"", 
//     weight:"", 
//     BMI:"", 

//     diabetes_duration:"", 

//     hba1c:"", 
//     fasting_blood_glucose:"", 
//     postprandial_glucose:"", 
//     c_peptide:"", 
//     sbp:"", 
//     dbp:"", 

//     total_cholesterol:"", 
//     triglycerides:"", 
//     ldl_cholesterol:"", 
//     hdl_cholesterol:"",

//     serum_creatinine:"", 
//     estimated_GFR:"", 
//     urinary_albumin_creatinine_ratio:"", 

//     smoking_status:"", 
//     alcohol_consumption:"", 

//     medications:"", 
//     metformin_usage:"", 
//     lipid_lowering_drugs:""

//   });
//    */
// }

//       </div>



//     <Footer/>

//     </div>
//   )
    
//   }


// }

// export default PatientDetails




import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';
import { toast } from 'react-toastify';
import './CSS/PatientDetails.css';
import Footer from '../Components/Footer';

const PatientDetails = () => {

  const { patientData, backend_URL } = useContext(AppContext);

  const [editState,setEditState] = useState(false);
  const [patientDetailsBackEnd,setPatientDetailsBackEnd] = useState([]);
  
  const [predictionResult, setPredictionResult] = useState(null);
  const [predictionProbability, setPredictionProbability] = useState(null);


  const [patientDetails,setPatientDetails] = useState({
    age:"",
    sex:"",
    cp:"",
    trestbps:"",
    chol:"",
    fbs:"",
    restecg:"",
    thalach:"",
    exang:"",
    oldpeak:"",
    slope:"",
    ca:"",
    thal:""
  });

  const handleInputChange = (evt)=>{
    const name = evt.target.name;
    const value = evt.target.value;
    setPatientDetails(prev=>({...prev,[name]:value}));
  }

  const handleSubmit = async(evt)=>{
    evt.preventDefault();
    try{

      const fetchOptions = {
        method:"POST",
        credentials:"include",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(patientDetails),
      }

      const response = await fetch(`${backend_URL}/api/patient/registerDetails`,fetchOptions);
    //   const response = await fetch("http://localhost:8000/api/patient/registerDetails",fetchOptions);
      console.log('response of the api',response);
      const data = await response.json();
      console.log("data from backend on Registering/Editing patient Details",data);

      if(data.success){
        toast.success(data.message);
        fetchPatientDetails();
        setEditState(false);
    }else{
        toast.error(data.message);
    }
    
}catch(error){
    toast.error(`Error: ${error}`);
    console.log('Error in Front-end, Registering/Editing patient Details',error);
}
setEditState(false);
  }

  const fetchPatientDetails = async ()=>{
    try{
        const fetchOptions = { method:"GET", credentials:"include" }
        const response = await fetch(`${backend_URL}/api/patient/getPatientInputDetails`,fetchOptions);
        const data = await response.json();
        if(data.success){
            setPatientDetailsBackEnd(data.message[0]);
            console.log("Patient Details",data);
        }else{
            toast.error(data.message);
        }
    }catch(error){
        toast.error(`Error: ${error}`);
    }
  }

  useEffect(()=>{
    if(patientData?.isDetailsFilled){
        fetchPatientDetails();
    }
  },[patientData]);


  const handlePredict = async () => {
  try {
    const fetchOptions = {
      method:"POST",
      credentials:"include",
      headers:{ "Content-Type":"application/json" }
    };

    const response = await fetch(`${backend_URL}/api/patient/predict`, fetchOptions);
    const data = await response.json();
    console.log("Prediction Response:", data);

    if(data.success){
      toast.success("Prediction Successful");
      setPredictionResult(data.predictionText);
      setPredictionProbability(data.probability);
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    toast.error("Prediction Error");
    console.log("Prediction Error:", error);
  }
};




  if(!patientData?.isDetailsFilled || editState){
  return (
    <div className='patient-details-container'>

      <div className="edit-button flex items-center justify-between" style={{padding:"0 10px",height:"60px"}}>
        <h1> Patient Details </h1>
      </div>

      <form onSubmit={handleSubmit}>

{/* AGE + SEX */}
        <div className="pateint-input-container">
          <div className="feild">
            <p> Age (years) </p>
            <input type="Number" name="age" required value={patientDetails.age} onChange={handleInputChange}/>
          </div>

          <div className="feild">
            <p> Sex </p>
            <select name="sex" required value={patientDetails.sex} onChange={handleInputChange}>
              <option value=""> Not Selected </option>
              <option value="1"> Male </option>
              <option value="0"> Female </option>
            </select>
          </div>
        </div>

{/* CP + TRESTBPS */}
        <div className="pateint-input-container">
          <div className="feild">
            <p> Chest Pain Type (cp) </p>
            <select name="cp" required value={patientDetails.cp} onChange={handleInputChange}>
              <option value=""> Not Selected </option>
              <option value="1"> Typical Angina (1) </option>
              <option value="2"> Atypical Angina (2) </option>
              <option value="3"> Non-Anginal Pain (3) </option>
              <option value="4"> Asymptomatic (4) </option>
            </select>
          </div>

          <div className="feild">
            <p> Resting Blood Pressure (trestbps) mmHg </p>
            <input type="Number" name="trestbps" required value={patientDetails.trestbps} onChange={handleInputChange}/>
          </div>
        </div>

{/* CHOL + FBS */}
        <div className="pateint-input-container">
          <div className="feild">
            <p> Serum Cholesterol (chol) mg/dl </p>
            <input type="Number" name="chol" required value={patientDetails.chol} onChange={handleInputChange}/>
          </div>

          <div className="feild">
            <p> Fasting Blood Sugar &gt; 120 mg/dl (fbs) </p>
            <select name="fbs" required value={patientDetails.fbs} onChange={handleInputChange}>
              <option value=""> Not Selected </option>
              <option value="1"> Yes (1) </option>
              <option value="0"> No (0) </option>
            </select>
          </div>
        </div>

{/* RESTECG + THALACH */}
        <div className="pateint-input-container">
          <div className="feild">
            <p> Resting ECG (restecg) </p>
            <select name="restecg" required value={patientDetails.restecg} onChange={handleInputChange}>
              <option value=""> Not Selected </option>
              <option value="0"> Normal </option>
              <option value="1"> ST-T Wave Abnormality </option>
              <option value="2"> Left Ventricular Hypertrophy </option>
            </select>
          </div>

          <div className="feild">
            <p> Max Heart Rate (thalach) </p>
            <input type="Number" name="thalach" required value={patientDetails.thalach} onChange={handleInputChange}/>
          </div>
        </div>

{/* EXANG + OLDPEAK */}
        <div className="pateint-input-container">
          <div className="feild">
            <p> Exercise Induced Angina (exang) </p>
            <select name="exang" required value={patientDetails.exang} onChange={handleInputChange}>
              <option value=""> Not Selected </option>
              <option value="1"> Yes (1) </option>
              <option value="0"> No (0) </option>
            </select>
          </div>

          <div className="feild">
            <p> ST Depression (oldpeak) </p>
            <input type="Number" step="0.1" name="oldpeak" required value={patientDetails.oldpeak} onChange={handleInputChange}/>
          </div>
        </div>

{/* SLOPE + CA */}
        <div className="pateint-input-container">
          <div className="feild">
            <p> Slope of Peak Exercise ST Segment (slope) </p>
            <select name="slope" required value={patientDetails.slope} onChange={handleInputChange}>
              <option value=""> Not Selected </option>
              <option value="1"> Upsloping (1) </option>
              <option value="2"> Flat (2) </option>
              <option value="3"> Downsloping (3) </option>
            </select>
          </div>

          <div className="feild">
            <p> Number of Major Vessels (ca) (0–3) </p>
            <select name="ca" required value={patientDetails.ca} onChange={handleInputChange}>
              <option value=""> Not Selected </option>
              <option value="0"> 0 </option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
            </select>
          </div>
        </div>

{/* THAL */}
        <div className="pateint-input-container">
          <div className="feild">
            <p> Thalassemia (thal) </p>
            <select name="thal" required value={patientDetails.thal} onChange={handleInputChange}>
              <option value=""> Not Selected </option>
              <option value="3"> Normal (3) </option>
              <option value="6"> Fixed Defect (6) </option>
              <option value="7"> Reversible Defect (7) </option>
            </select>
          </div>
        </div>

        <button style={{marginBottom:"10px",marginTop:"50px"}}> Submit Details </button>

      </form>
      <Footer/>
    </div>
  )
  }

  // ------------------- DISPLAY SECTION -------------------
  return (
    <div className='patient-details-container'>
      <div className="edit-button flex items-center justify-between" style={{padding:"0 10px",height:"60px"}}>
        <h1> Patient Details </h1>
        <button style={{margin:0,padding:0,height:"50px",width:"80px"}} onClick={()=> setEditState(true)}> Edit </button>
      </div>

      <div className='show-details'>

{/* DISPLAY SAME FIELDS */}
        {Object.entries({
          "Age": patientDetailsBackEnd?.age,
          "Sex": patientDetailsBackEnd?.sex===1?"Male": patientDetailsBackEnd?.sex===0?"Female":"N/A",
          "Chest Pain Type (cp)": patientDetailsBackEnd?.cp,
          "Resting BP (trestbps)": patientDetailsBackEnd?.trestbps,
          "Serum Cholesterol (chol)": patientDetailsBackEnd?.chol,
          "Fasting Blood Sugar (fbs)": patientDetailsBackEnd?.fbs,
        //   "Resting ECG (restecg)": patientDetailsBackEnd?.restecg,
        "Resting ECG (restecg)": patientDetailsBackEnd?.restecg===0 ? "Normal" : patientDetailsBackEnd?.restecg===1 ? "ST-T Wave Abnormality" : patientDetailsBackEnd?.restecg===2 ? "Left Ventricular Hypertrophy" : "N/A",
          "Max Heart Rate (thalach)": patientDetailsBackEnd?.thalach,
          "Exercise Induced Angina (exang)": patientDetailsBackEnd?.exang,
          "ST Depression (oldpeak)": patientDetailsBackEnd?.oldpeak,
          "Slope (slope)": patientDetailsBackEnd?.slope,
          "Vessels Colored (ca)": patientDetailsBackEnd?.ca,
          "Thal": patientDetailsBackEnd?.thal
        }).map(([label,val],i)=>(
          <div className="pateint-input-container" key={i}>
            <div className="feild-1">
              <p> {label} : </p>
              <span> {val || "N/A"} </span>
            </div>
          </div>
        ))}

      </div>

      <div className="prediction-card" style={{
  margin:"20px auto",
  padding:"20px",
  borderRadius:"10px",
  background:"#ffffff10",
  border:"1px solid #ccc",
  width:"90%",
  textAlign:"center"
}}>
  <h2 style={{marginBottom:"15px"}}> Heart Disease Risk Prediction </h2>

  <button
    onClick={handlePredict}
    style={{
      padding:"12px 20px",
      backgroundColor: "#006f75fb",
      color:"white",
      border:"none",
      borderRadius:"8px",
      cursor:"pointer",
      fontSize:"16px",
      marginBottom:"15px"
    }}
  >
    Predict
  </button>

  {predictionResult && (
    <div style={{marginTop:"15px"}}>
      <h3 style={{marginBottom:"5px"}}> Result: </h3>
      <p style={{fontSize:"18px", fontWeight:"bold"}}>{predictionResult}</p>

      {predictionProbability !== null && (
        <>
          <p style={{marginTop:"10px"}}>Confidence Score:</p>
          <p style={{fontSize:"16px"}}>{(predictionProbability * 100).toFixed(2)}%</p>
        </>
      )}
    </div>
  )}
</div>

      <Footer/>
    </div>
  );
}

export default PatientDetails;
