# Task-1 → Basic API Fetch  

## 🎯 Objective  
To fetch data from a public API and display it in React efficiently with a loading spinner.  

---

## ⚡ Features  
- Fetch data from `https://jsonplaceholder.typicode.com/posts`  
- Store the response in **React state**  
- Render the list dynamically  
- Show a **loading spinner** until data is fetched  

---

## 🔄 Flow Diagram  

API → Fetch Request → Response(JSON) → Store in `useState` → Render UI  

---

## 🧑‍💻 Concepts Used 

- **React useState & useEffect** → to manage state and lifecycle  
- **Fetch API with async/await** → for data fetching  
- **Conditional Rendering** → show loader vs data  

---

## 📌 Working Flow  
1. On component mount → fetch request goes to API  
2. API sends back data in JSON format  
3. Data is stored in `useState`  
4. Loader disappears & data is displayed in list form  

---

## Example Output  
- Loader → *"Loading..."*  
- After fetch → List of posts displayed in boxes
