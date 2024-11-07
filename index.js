const express = require("express");
const cors = require("cors");
const app = express();
let { company } = require("./models/company.model");
let { sequelize } = require("./lib/index.js");

app.use(express.json());
app.use(cors());

let companyData = [
  {
    'id': 1,
    'name': 'Tech Innovators',
    'industry': 'Technology',
    'foundedYear': 2010,
    'headquarters': 'San Francisco',
    'revenue': 75000000
  },
  {
    'id': 2,
    'name': 'Green Earth',
    'industry': 'Renewable Energy',
    'foundedYear': 2015,
    'headquarters': 'Portland',
    'revenue': 50000000
  },
  {
    'id': 3,
    'name': 'Innovatech',
    'industry': 'Technology',
    'foundedYear': 2012,
    'headquarters': 'Los Angeles',
    'revenue': 65000000
  },
  {
    'id': 4,
    'name': 'Solar Solutions',
    'industry': 'Renewable Energy',
    'foundedYear': 2015,
    'headquarters': 'Austin',
    'revenue': 60000000
  },
  {
    'id': 5,
    'name': 'HealthFirst',
    'industry': 'Healthcare',
    'foundedYear': 2008,
    'headquarters': 'New York',
    'revenue': 80000000
  },
  {
    'id': 6,
    'name': 'EcoPower',
    'industry': 'Renewable Energy',
    'foundedYear': 2018,
    'headquarters': 'Seattle',
    'revenue': 55000000
  },
  {
    'id': 7,
    'name': 'MediCare',
    'industry': 'Healthcare',
    'foundedYear': 2012,
    'headquarters': 'Boston',
    'revenue': 70000000
  },
  {
    'id': 8,
    'name': 'NextGen Tech',
    'industry': 'Technology',
    'foundedYear': 2018,
    'headquarters': 'Chicago',
    'revenue': 72000000
  },
  {
    'id': 9,
    'name': 'LifeWell',
    'industry': 'Healthcare',
    'foundedYear': 2010,
    'headquarters': 'Houston',
    'revenue': 75000000
  },
  {
    'id': 10,
    'name': 'CleanTech',
    'industry': 'Renewable Energy',
    'foundedYear': 2008,
    'headquarters': 'Denver',
    'revenue': 62000000
  }
];

// Defining a route to seed the database
app.get("/seed_db", async (req, res) => {
  try{
    await sequelize.sync({ force: true });
    await company.bulkCreate(companyData);

   return res.status(200).json({ message: "Database seeding successful." });
  } catch(error){
    res.status(500).json({ message: "Error seeding the database", error: error.message });
  }
});

// function to fetch all companies
async function fetchAllCompanies(){
  let companies = await company.findAll();
  return { companies };
}

// Endpoint to fetch all companies
app.get("/companies", async (req, res) => {
 try{
   let results = await fetchAllCompanies();

   if(results.companies.length === 0){
     return res.status(404).json({ message: "No compnay found." });
   }

  return res.status(200).json(results);
 } catch(error){
   res.status(500).json({ message: "Error fetching companies" , error: error.message});
 }
});

// function to fetch company details by Id
async function fetchCompaniesById(id){
  let companyData = await company.findOne({ where: {id}  });
  return { company: companyData };
}

// Endpoint to fetch company details by Id
app.get("/companies/details/:id", async (req, res) => {
 try{
  let id = parseInt(req.params.id);
  let result = await fetchCompaniesById(id);

  if(result.company === null){
    res.status(404).json({ message: "No company found." });
  }

  return res.status(200).json(result);
 } catch(error){
   res.status(500).json({ message: "Error fetching company details by Id.", error: error.message });
 }
});

// function to fetch all companies by Industry
async function fetchCompanyByIndustry(industry){
  let companies = await company.findAll({ where: {industry} });
  return { companies: companies };
}

// Endpoint to fetch all companies by industry
app.get("/companies/industry/:industry", async (req, res) => {
  try{
    let industry = req.params. industry;
    let results = await fetchCompanyByIndustry(industry);

    if(results.companies.length === 0){
      return res.status(404).json({ message: "No companies found." });
    }

    res.status(200).json(results);
  } catch(error){
    res.status(500).json({ message: "Error fetching companies by industry", error: error.message });
  }
});

// function to sort all companies by their revenue
async function sortCompanies(order){
  let sortedCompany = await company.findAll({ order: [["revenue", order]]});
  return { companies: sortedCompany };
}

// Endpoint to sort all companies by their revenue 
app.get("/companies/revenue", async (req, res) => {
 try{ 
 let order = req.query.order;
 let results = await sortCompanies(order);

 if(results.companies.length === 0){
   return res.status(404).json({ message: "No companies found." });
 }
 
 return res.status(200).json(results);
 } catch(error){
   res.status(500).json({ message: "Error fetching sorted companies", error: error.message });
 }
});

app.listen(3000, () => {
  console.log("Server is running on Port : 3000");
});