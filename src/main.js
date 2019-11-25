// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

import { prepAndRun } from './js/roman.js';


// UI

$(document).ready(function(){
  $("#number-input").submit(function(event){
    event.preventDefault();
    const numInput = $('#user-number').val();
    $('#converted-results').text(prepAndRun(numInput));
  });
});
