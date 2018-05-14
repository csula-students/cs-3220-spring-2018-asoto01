package edu.csula.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.csula.storage.servlet.EventsDAOImpl;
import edu.csula.storage.EventsDAO;
import edu.csula.models.Event;

@WebServlet("/admin/events")
public class AdminEventsServlet extends HttpServlet {
	@Override
	public void doGet( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		// TODO: render the events page HTML
		EventsDAO dao = new EventsDAOImpl(getServletContext());
		Collection<Event> events = dao.getAll();
		System.out.println(events);

		String html =  "<link rel='stylesheet' type='text/css' href='/css/app.css'>" +
		"<h1>Incremental Game Framework</h1>"+
		""+
		"  <div class=\"topnav\">"+
		"    <a class=\"active\" href=\"game-info.html\">Game Information</a>"+
		"    <a href=\"generator-meta.html\">Generators</a>"+
		"    <a href=\"event-meta.html\">Events</a>"+
		"  </div>"+
		"<div class=\"container\">"+
		"  <div class=\"metainfo\">"+
		"    <p>Event Name:</p>"+
		"    <input type=\"text\" placeholder=\"Enter event name here...\">"+
		"    <p>Event Description:</p>"+
		"    <input type=\"text\" placeholder=\"Enter event description here...\">"+
		"    <p>Trigger at:</p>"+
		"    <input type=\"text\" placeholder=\"Enter trigger event here...\">"+
		"    <br>"+
		"    <br>"+
		"    <button type=\"submit\">Add/Edit</button>"+
		"  </div>"+
		"  <div>"+
		"  <table>"+
		"        <thead>"+
		"          <tr>"+
		"            <th>Name</th>"+
		"            <th>Description</th>"+
		"            <th>Trigger at</th>"+
		"          </tr>"+
		"        </thead>"+
		"        <tbody>"+
		"          <tr>"+
		"            <td>Jim</td>"+
		"            <td>00001</td>"+
		"            <td>43</td>"+
		"          </tr>"+
		"          <tr>"+
		"            <td>Sue</td>"+
		"            <td>00002</td>"+
		"            <td>45</td>"+
		"          </tr>"+
		"          <tr>"+
		"            <td>Barb</td>"+
		"            <td>00003</td>"+
		"            <td>53</td>"+
		"          </tr>"+
		"        </tbody>"+
		"      </table>"+
		"    </div>"+
		"  </div>";
		out.println(html);
	}


	@Override
	public void doPost( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO: handle upsert transaction

	}
}
