import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.styl']
})
export class NewsContentComponent implements OnInit {

  constructor(private route:ActivatedRoute) { } // 声明

  ngOnInit() {
  	this.route.params.subscribe((data)=>{
  		console.log(data.id);
  	});
  }

}
