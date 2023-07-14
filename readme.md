**Project Title:** Multor
**Live Link / Demo Link:**
[\[Sandbox\]](https://codesandbox.io/p/sandbox/focused-chaum-lhhvk4?file=/src/Sections/RatingSection/index.js:6,1) 
[\[netlify\]](https://main--meek-gumdrop-fcc3e7.netlify.app/)

## File Structure
Structure of Files. 
```markdown
├── ProjectDemo #screenshot of project
├── src
│   ├── Assets
│   |   ├── img 
│   |   |   ├── Svg/jpg ...
│   ├── Components
│   |   ├── Custom Components ...
│   |   ├── index.js 
│   ├── Sections
│   |   ├── Section Screens ...
│   |   ├── index.js 
│   ├── app.js
│   ├── index.js
│   ├── input.css
│   ├── style.css #Main css file
├── public
│   ├── index.html
├── dist (or build)
├── node_modules
├── package.json
└── .gitignore
```
## Sections
These are the section that are used to divide the website Component Name by that they are Defined.

| Section Name(Component)| props    | description                                 |
| ------------------     | ---------| ----------------------------------------    |
| `HeaderSection`        |  `none` 	| Org Icon and Brief description              |
| `AppointmentSection`   |  `none` 	| Appointment Form and benifits Section       |
| `InfoSection`          | 	`none`  | Information Video Section                   |
| `RatingSection`        | 	`none`  | Rating /Testimony Section					  |
| `FeatureSection`       | 	`none`  | Features Description Section                |
| `AboutSection`         | 	`none`  | About Section                               |
| `FooterSection`        | 	`none`  | Footer Section                              |

## Components
These are the Custumized to use it repeatively.

| Component Name | props                 				  | description                 |
| -----------    | ---------------------------------------| ------------------------    |
| `ScheduleForm` |  `none` 								  | Appointment form            |
| `Benifit`   	 |  `img| title  |description`			  | benifits Element            |
| `Feature`      | 	`imgsrc| title  |desc`  			  | Feature Img and description |
| `Rating`       | 	`stars |img| comment| location|name`  | Rating /Testimony Section   |

## ScreenShots
Saved in ProjectDemo Folder

## Technology Used / library
**`JavaScript:`**  `language used to build the webapplication` <br>
**`React:`**  `library used in application` <br>
**`TailwindCss:`**  `css used to design UI/UX ` <br>
**`react-form-hook:`** `libary used to build Appointment Form` <br>

## **Setup / Installation**
##### Clone the repo
```bash
	git clone ...
	cd proj 
```

##### Install the packages
```bash
	yarn install 
```
or 
```bash
	npm install 
```
##### Start the Application
```bash
	yarn start
```
or 
```bash
	npm start 
```
