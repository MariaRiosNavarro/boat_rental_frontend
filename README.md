# React + Vite + Tailwind + DaisyUI \* MongoDB Atlas + Cloudinary -> Fullstack Boat Rental (Desktop)

## [RENDER DEPLOYMENT SERVER](https://boat-rental-server.onrender.com/)

## [RENDER DEPLOYMENT FRONTEND](https://boat-rental-frontend.onrender.com/)

Welcome to the Full Stack Boats project, built with React, Vite, Tailwind CSS, and DaisyUI, MongoDB ATLAS + Cloudinary. This application includes a self-hosted server and utilizes a MongoDB ATLAS with two collections: 'boats' and 'rentals'. Seamlessly integrated into the project are all CRUD (Create, Read, Update, Delete) operations for efficient data management.

-The Backend server can be found at [boats_rental_server](https://github.com/MariaRiosNavarro/boat_rental_server)

## Features:

### Header

- The logo (Rudder Icon) in the header serves as a link to the home page.
- A Boat icon in the header provides a quick link to the Boats List.
- A Anchors icon in the header provides a quick link to the Reservations/Rentals List.

![Home](/public/readmeimg/home.png)

### Home Page

- The home page displays 3 informations.

- How many bookings there are, how many free boats today and how many boats in total, these informations also have a link to both boats and reservations. All this information comes from the current information in the database (MongoDB ATLAS).

### Boats Page

![Home](/public/readmeimg/blist.png)

- A "+" Icon with a Link to the Boat form

- List all boats

- Each boats entry in the Boats Page also includes a link to its respective detail page with editing & delete capabilities.

- Information about the next bookings is given on the picture

- If the user did not provide an image in the input form I use a placeholder:

- PLACEHOLDER from <a href="https://unsplash.com/de/@osmanrana?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Osman Rana</a> in <a href="https://unsplash.com/de/fotos/weisses-boot-auf-gewasser-Oi1fJwi35oI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

### Rentals Page

![Home](/public/readmeimg/rlist.png)

- A "+" Icon with a Link to the Reservation form

- List all reservations.

- Each reservations entry in the favorites section also includes a button to its respective detail page with delete capabilities.

![Home](/public/readmeimg/detailbuttonrlist.png)

### Boats Form

![Home](/public/readmeimg/bform.png)

- Users can add their own Boats through a dedicated form.
- The form allows users to add a file, upload to cloudinary
- A toast notification informs the user of the success or failure of the operation.

![Home](/public/readmeimg/toastbform.png)

### Rental Form

![Home](/public/readmeimg/rform.png)

- A carousel of images serves as input for choosing the right boat, with current information on the stocks of that boat. The internal logic prevents the booking of a boat that is already booked on the dates the boat is booked.
- Users can add their own Reservation through a dedicated form.
- A toast notification informs the user of the success or failure of the operation.

![Home](/public/readmeimg/rform2.png)

![Home](/public/readmeimg/toastrform.png)

### Detail Page Boats - Edit & Delete

![Home](/public/readmeimg/detailb.png)

- Users can edit or remove Boats in the detail page.
- Boats properties can be edited, including text properties (file editing functionality coming soon). The edit form triggers a toast notification to provide information to the user.

![Home](/public/readmeimg/editb.png)

![Home](/public/readmeimg/toastedit.png)

### Detail Page Rentals - Delete

![Home](/public/readmeimg/rdetail.png)

- Users remove Reservations in the detail page.

![Home](/public/readmeimg/rdelete.png)

### Initial Stucture & Infos

![Structure](/public/readmeimg/design.png)

![Structure](/public/readmeimg/structure.png)

### npm Design

NPM package for waves:

[react-wavify](https://www.npmjs.com/package/react-wavify)

### Images

<a href="https://de.freepik.com/vektoren-kostenlos/sommer-ikonen_1189389.htm#query=boat&position=2&from_view=search&track=sph&uuid=37a76bfd-cc8c-49d7-85db-a6527144b8c8">ICONS of my page</a> auf Freepik

[Foto](https://unsplash.com/de/fotos/papierboot-auf-gewasser-sRg9N_0pn1Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Ahmed Zayan auf Unsplash

[Foto](https://unsplash.com/de/fotos/weisses-boot-auf-gewasser-Oi1fJwi35oI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Osman Rana auf Unsplash

[Foto](https://unsplash.com/de/fotos/weisses-und-braunes-boot-im-gewasser-7jZNgIuJrCM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Marcelo Cidrack auf Unsplash

[Foto](https://unsplash.com/de/fotos/weisse-yacht-mitten-im-blauen-meer-qToVxSYXPYU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Roberto H auf Unsplash

[Foto](https://unsplash.com/de/fotos/weisse-und-blaue-yacht-auf-see-unter-blauem-himmel-tagsuber-86wR5GZJZdQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Alina Kacharho auf Unsplash

[Foto](https://unsplash.com/de/fotos/mann-fahrt-tagsuber-auf-weissem-und-rotem-boot-auf-see-o9oQaOGpLz0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Ivan Ragozin auf Unsplash

[Foto](https://unsplash.com/de/fotos/gelbe-und-grune-boote-BUfseUFh69Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Ian Badenhorst auf Unsplash

[Foto](https://unsplash.com/de/fotos/luftaufnahme-einer-weissen-yacht-auf-ruhigem-wasser-t-6GW8T6Jsc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von nikldn auf Unsplash

[Foto](https://unsplash.com/de/fotos/person-ruderkanu-Vg26vpIfgoU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Lennart Heim auf Unsplash

[Foto](https://unsplash.com/de/fotos/drei-segelboote-tagsuber-auf-dem-wasser-58AiTToabyE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Karla Car auf Unsplash

[Foto](https://unsplash.com/de/fotos/weiss-schwarzes-segelboot-auf-see-tagsuber-bRGy5Wd5BB4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Miquel Gelabert auf Unsplash

[Foto](https://unsplash.com/de/fotos/menschen-die-tagsuber-auf-pontonbooten-auf-einem-gewasser-fahren-FS7UNiVGeWQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Alex Perez auf Unsplash

[Foto](https://unsplash.com/de/fotos/braunes-holzboot-tagsuber-auf-gewassern-in-der-nahe-von-grunen-palmen-ayFW56Rz5Cs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Abhishek Prasad auf Unsplash

[Foto](https://unsplash.com/de/fotos/weisses-und-grunes-wassermotorrad-auf-dem-wasser-CZMZYr2wWNw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Marc Babin auf Unsplash

[Foto](https://unsplash.com/de/fotos/braunes-schiff-unter-blauem-himmel-JQGmVcIiHys?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Zachary Young auf Unsplash

[Foto](https://unsplash.com/de/fotos/ein-segelboot-im-wasser-vor-einer-stadt-wd9ryWUXuYE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Fly Anywhere Couple auf Unsplash

[Foto](https://unsplash.com/de/fotos/ein-boot-ist-an-einem-dock-festgemacht-_LI4svwnfoY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Dmitrijs Safrans auf Unsplash

[Foto](https://unsplash.com/de/fotos/braunes-boot-tagsuber-auf-dem-see-in-der-nahe-von-bergen-iQhR_d06wvA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Leuchtturm Entertainment auf Unsplash

[Foto](https://unsplash.com/de/fotos/junge-sitzt-auf-boje-McmRfLKw8yg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von takahiro taguchi auf Unsplash

[Foto](https://unsplash.com/de/fotos/white-paper-boot-auf-dem-wasser-pF-llHgCZ5U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Janis Fasel auf Unsplash

[Foto](https://unsplash.com/de/fotos/gelbes-und-schwarzes-wassermotorrad-auf-dem-wasser-uWD0YQOBIZo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) von Mudassir Ali auf Unsplash
