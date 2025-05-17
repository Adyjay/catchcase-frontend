export const API_BASE_URL = "https://api-catchcase.prataptechnologies.me"; 

import axios from "axios";

const API = 'https://api-catchcase.prataptechnologies.me';
// for subcategory
export const addSubcategory = async (
  token: string,
  title: string,
  icon: string,
  category: string
) => {
  const res = await axios.post(`${API}/admin/addSubcategory`, {
    title,
    icon,
    category,
  }, {
    headers: { Authorization: token },
  });

  return res.data;
};

export const fetchCategories = async (token: string) => {
  const res = await axios.get(`${API}/user/allcategory`, {
    headers: { Authorization: token },
  });

  return res.data.data; // Assuming this is the structure
};

export const updateCategory = async (
  token: string,
  categoryId: string,
  // @ts-ignore
  title: string,
  icon: string
) => {
  const res = await axios.put(`${API}/admin/updatecategory/${categoryId}`, {
    "iconUrl": icon,
  }, {
    headers: { Authorization: token },
  });

  return res.data;
};


export async function loginAdmin(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const result = await response.json();


  if (!response.ok) throw new Error(result.message || "Login failed");
  return result;
}


export const fetchAllSubcategories = async (token: string) => {
  const res = await axios.get(`${API}/user/allsubcategory`, {
    headers: { Authorization: token },
  });
  return res.data.data; // Adjust if the response structure differs
};

export const updateSubcategory = async (
  token: string,
  subcategoryId: string,
  title: string,
  icon: string
) => {
  console.log("id is", subcategoryId);
  const res = await axios.put(`${API}/admin/updatesubcategory/${subcategoryId}`, {
    "title": title,
    "iconString":icon,
  }, {
    headers: { Authorization: token },
  });

  return res.data;
};

export const fetchAllQuestions = async (token: string) => {
  const res = await axios.get(`${API}/user/allquestion`, {
    headers: { Authorization: token },
  });
  return res.data.data; // Adjust if your response structure differs
};

export const updateQuestion = async (
  token: string,
  questionId: string,
  title: string,
  description: string
) => {
  const res = await axios.put(
    `${API}/admin/updatequestion/${questionId}`,
    { title, description },
    {
      headers: { Authorization: token },
    }
  );
  return res.data;
};

export const addCategory = async (
  token: string,
  reqtitle: string,
  icon: string
) => {
  const res = await axios.post(
    `${API}/admin/addCategory`,
    { reqtitle, icon },
    {
      headers: { Authorization: token },
    }
  );
  return res.data;
};



export const addQuestion = async (
  token: string,
  title: string,
  description: string,
  Subcategory: String
) => {
  const res = await axios.post(
    `${API}/admin/addQuestion`,
    { title, description, Subcategory },
    {
      headers: { Authorization: token },
    }

  );
  return res.data;
};

export const getAllCategories = async (token: string) => {
  const res = await axios.get(`${API}/user/allcategory`, {
    headers: { Authorization: token },
  });
  return res.data.data; // assuming it returns an array of categories
};



export const getAllSubcategories = async (token: string) => {
  const res = await axios.get(`${API}/user/allsubcategory`, {
    headers: { Authorization: token },
  });
  return res.data.data; // assuming the subcategories are in `data`
};




export const getAllQuestions = async (token: string) => {
  const res = await axios.get(`${API}/user/allquestion`, {
    headers: { Authorization: token },
  });
  return res.data.data;
};


export const getAllUsers = async (token: string) => {
  const res = await axios.get(`${API}/admin/allusers`, {
    headers: { Authorization: token },
  });
  return res.data.data;
};

export const toggleUser = async (
  token: string,
  uid: string,
  action: "enable" | "disable"
) => {
  const res = await axios.patch(`${API}/admin/user/${action}/${uid}`, {}, {
    headers: { Authorization: token },
  });
  return res.data.data;
};
