import { Example } from './example';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var example = new Example;


$(document).ready(function() {
  $('.click').click(function(event) {
    $(this).append("ok");
  });
});
