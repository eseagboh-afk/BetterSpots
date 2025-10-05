import {  db } from "../firebase/firebase-config";
import {  doc, GeoPoint, setDoc, addDoc, collection } from "firebase/firestore";

async function seedData() 
{

    try 
    {
        const coffeeShop001 = await setDoc(doc(db, "coffeeShops", "Thump"),
        {
            name: "Thump Coffee",
            address: "1201 E 13th Ave, Denver, CO 80218",
            location: new GeoPoint(39.73744, -104.97244),
            uniqueID: "001",   
        });

        const coffeeShop002 = await setDoc(doc(db, "coffeeShops", "Pablo's Penn"),
        {
            name: "Pablo's Coffee - Penn Street",
            address: "1300 Pennsylvania St Ste 102, Denver, CO 80203",
            location: new GeoPoint(39.73891, -104.98118),
            uniqueID: "002",   
        });

        const coffeeShop003 = await setDoc(doc(db, "coffeeShops", "Pablo's 6th"),
        {
            name: "Pablo's Coffee - 6th Avenue",
            address: "630 E 6th Ave, Denver, CO 80203",
            location: new GeoPoint(39.72664, -104.97861),
            uniqueID: "003",   
        });

         const coffeeShop004 = await setDoc(doc(db, "coffeeShops", "Hudson Hill"),
        {
            name: "Hudson Hill",
            address: "619 E 13th Ave, Denver, CO 80203",
            location: new GeoPoint(39.73858, -104.97887),
            uniqueID: "004",   
        });

        await addDoc(collection(db, "events"), 
        {
            title: "coworking",
            date: "2025-12-03T09:00:00",
            capacity: 7, 
            attendees: [],
            coffeeShopID: "Thump",
            location: new GeoPoint(39.73744, -104.97244),

        });
        
        await addDoc(collection(db, "events"), 
        {
            title: "brain break",
            date: "2025-12-05T12:30:00",
            capacity: 7, 
            attendees: [],
            coffeeShopID: "Hudson Hill",
            location: new GeoPoint(39.73858, -104.97887),

        });
        
         await addDoc(collection(db, "events"), 
        {
            title: "flex friday",
            date: "2025-12-05T14:30:00",
            capacity: 7, 
            attendees: [],
            coffeeShopID: "Pablo's 6th",
            location: new GeoPoint(39.72664, -104.97861),

        });
        
        console.log("Seed data successfully created!");


    } catch(error) 
    {
        console.error("Error creating seed data", error);
    }

}

seedData();
