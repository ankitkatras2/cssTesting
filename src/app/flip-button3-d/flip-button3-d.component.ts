import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-button3-d',
  templateUrl: './flip-button3-d.component.html',
  styleUrls: ['./flip-button3-d.component.css']
})
export class FlipButton3DComponent implements OnInit {

  cssCode: string;
  htmlCode: string;
  jsCode: string;
  dataFace: string = '';

  loadAPI: Promise<any>;

  constructor() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
    this.cssCode = `/* CORE CSS */
    body {
      -webkit-perspective: 1000px;
      -moz-perspective: 1000px;
      perspective: 1000px;
    }
    /* Container box to set the sides relative to */
    .cube {
      width: 250px;
      height: 100px;
      -webkit-transition: all 250ms ease;
      -moz-transition: all 250ms ease;
      -o-transition: all 250ms ease;
      transition: all 250ms ease;
      -webkit-transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      -o-transform-style: preserve-3d;
      -ms-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }
    /* The two faces of the cube */
    .default-state,
    .active-state {
      height: 100px;
    }
    /* Position the faces */
    .default-state {
      -webkit-transform: translateZ(50px);
      -moz-transform: translateZ(50px);
      -o-transform: translateZ(50px);
      -ms-transform: translateZ(50px);
      transform: translateZ(50px);
    }
    .flip-to-top .active-state {
      -webkit-transform: rotateX(90deg) translateZ(150px);
      -moz-transform: rotateX(90deg) translateZ(150px);
      -o-transform: rotateX(90deg) translateZ(150px);
      -ms-transform: rotateX(90deg) translateZ(150px);
      transform: rotateX(90deg) translateZ(150px);
    }
    .flip-to-bottom .active-state {
      -webkit-transform: rotateX(-90deg) translateZ(-50px);
      -moz-transform: rotateX(-90deg) translateZ(-50px);
      -o-transform: rotateX(-90deg) translateZ(-50px);
      -ms-transform: rotateX(-90deg) translateZ(-50px);
      transform: rotateX(-90deg) translateZ(-50px);
    }
    /* Rotate the cube */
    .cube.flip-to-top:hover {
      -webkit-transform: rotateX(-89deg);
      -moz-transform: rotateX(-89deg);
      -o-transform: rotateX(-89deg);
      -ms-transform: rotateX(-89deg);
      transform: rotateX(-89deg);
    }
    .cube.flip-to-bottom:hover {
      -webkit-transform: rotateX(89deg);
      -moz-transform: rotateX(89deg);
      -o-transform: rotateX(89deg);
      -ms-transform: rotateX(89deg);
      transform: rotateX(89deg);
    }
    /* END CORE CSS */
    /* Demo styling */
    body {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      margin: 70px;
      background: #f1f1f1;
    }
    h1 {
      font-size: 20px;
      text-align: center;
      margin-top: 40px;
    }
    .cube {
      text-align: center;
      margin: 0 auto;
    }
    .default-state,
    .active-state {
      background: #ffcc00;
      font-size: 16px;
      text-transform: uppercase;
      color: #fff;
      line-height: 100px;
      -webkit-transition: background 250ms ease;
      -moz-transition: background 250ms ease;
      -o-transition: background 250ms ease;
      transition: background 250ms ease;
    }
    .cube:hover .default-state {
      background: #ffcc00;
    }
    .active-state {
      background: #e20074;
    }
    #flipto {
      display: block;
      text-align: center;
      text-decoration: none;
      margin-top: 20px;
      color: #ccc;
    }
    `;
    this.htmlCode = `<h1>3D FLIP BUTTON</h1>

  <!-- flip-to-top or flip-to-bottom -->
  <div class="cube flip-to-top">
        <div class="default-state">
          <span>Hover</span>
      </div>
      <div class="active-state">
          <span>...and I flip</span>
      </div>
  </div>
  
  <a href="#" id="flipto" data-face="bottom">Flip: to bottom</a>`;
    this.jsCode = `$('#flipto').on("click", function(event) {
  event.preventDefault();
  
  var face = $(this).data("face");
  
  if ( face == "bottom" ) {
    $(".cube").removeClass("flip-to-top").addClass("flip-to-bottom");
    $(this).data("face", "top").text("Flip: to top");
  } else {
    $(".cube").removeClass("flip-to-bottom").addClass("flip-to-top");
    $(this).data("face", "bottom").text("Flip: to bottom");
  }
});`;
  }

  ngOnInit() {
  }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = ["../../assets/js/flip.js"];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }

  }
}
