import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css']
})
export class InformationCardComponent implements OnInit {
  cssCode: string;
  htmlCode: string;
  jsCode: string;

  constructor() {
    this.cssCode = `
body {
  background: #dcf5ff;
  margin: 0;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  font-family: "Nunito", "sans-serif";
}

.inner {
  background: #09c999;
  padding: 1em;
  border-radius: 10px;
  width: 250px;
  clip-path: circle(10% at 90% 20%);
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.inner:hover {
  clip-path: circle(75%);
  background: #00b6ff;
}
.inner h1 {
  color: white;
  margin: 0;
}
.inner p {
  color: white;
  font-size: 0.8rem;
}
.inner span {
  float: right;
  color: white;
  font-weight: bold;
  transition: color 0.5s;
  position: relative;
  margin-right: 4%;
}
.inner:hover span {
  color: rgba(255, 255, 255, 0);
}
    
    `;
    this.htmlCode = `
<div class="container">
    <div class="inner">
        <span>i</span>
        <h1>Hey</h1>
        <p>This is an informative card that will tell you something that's... well, important!</p>
    </div>
</div>
`;
    this.jsCode = `/*None*/`;
  }

  ngOnInit() {
  }

}
