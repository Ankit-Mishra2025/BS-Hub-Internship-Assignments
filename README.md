# Task-3 → Searching in Cached Data  

## 🎯 Objective  
Enhance cached data usage by adding **search functionality**.  

---

## ⚡ Features  
- Fetch data from API & store in cache/local storage  
- **Search box** → filters data in real-time from cache  
- **Refresh button** → makes fresh API call  
- Spinner → only shown during fresh fetch  
- Works offline (since data is served from cache)  

---

## 🔄 Flow Diagram  

API → Fetch Data → Store in Cache/Local Storage  
⬇  
User Input → Search Filter Applied on Cached Data  
⬇  
Refresh → Force API Call → Update Cache + Storage  

---

## 🧑‍💻 Concepts Used  
- **Array filter()** → for searching data  
- **React Query** → cache management  
- **Local Storage** → persistence  
- **Controlled Input (React)** → for search box  

---

## 📌 Working Flow  
1. On mount → load from cache/local storage  
2. User types in search box → filter cached data dynamically  
3. Refresh button → fetches fresh API data  
4. Loader appears only for API fetch  

---
