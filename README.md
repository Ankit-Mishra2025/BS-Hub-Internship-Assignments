# Task-2 → Cached Data in Local Storage + React Query  

## 🎯 Objective  
Persist API response in **Local Storage** and **React Query cache** to avoid unnecessary re-fetching.  



## ⚡ Features  
- Fetch data from `https://jsonplaceholder.typicode.com/posts`  
- Store API response in:  
  - **Local Storage** → persists across refresh  
  - **React Query cache** → instant re-render without re-fetch  
- **Refresh button** → forces fresh API call  
- Loader shown only for fresh fetch  

---

## 🔄 Flow Diagram  

API → Fetch → Store in Local Storage & React Query Cache  
⬇  
On Reload → Check Local Storage → Display Data (No fetch)  

---

## 🧑‍💻 Concepts Used  
- **React Query** → for smart caching  
- **Local Storage** → for persistent data storage  
- **React useEffect** → to sync local storage with API response  

---

## 📌 Working Flow  
1. On mount → check local storage  
   - If data found → show directly  
   - Else → fetch from API and save to local storage + cache  
2. Refresh button → ignores cache and makes new API call  
3. Data updates everywhere (state + local storage + cache)  

---
