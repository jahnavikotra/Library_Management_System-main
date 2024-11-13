package com.profound.library;


import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/StudentMyBook")
public class StudentMyBook extends HttpServlet {
	
	public StudentMyBook() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		out.print("<!DOCTYPE html>");
		out.print("<html>");
		out.println("<head>");
		out.println("<title>View Book</title>");
		out.println("<link rel='stylesheet' href='bootstrap.min.css'/>");
		out.println("</head>");
		out.println("<body>");
		out.println("<style>#bs-example-navbar-collapse-1{background: linear-gradient(to top left,red,blue);}</style>");
		out.println("<style>#bs-example-navbar-collapse-1{color:white);}</style>");
		request.getRequestDispatcher("navstudent.html").include(request, response);
		out.println(
				"<style>@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap</style>");
		out.println("<div class='container'>");
		int rno1 = Integer.parseInt(request.getParameter("rno"));
		out.print("<style>.container{font-family: 'Poppins', sans-serif;}</style>");
		try {
			Connection con = DB.getCon();
			Statement stmt = con.createStatement();

			out.println("<table class='table table-bordered table-striped'>");
			out.println(
					"<tr><th>Book Id</th><th>Roll No.</th><th>Name</th><th>Mobile No.</th><th>Issue Date</th><th>Status</th></tr>");
			out.print("<style>th{background-color:aqua;}</style>");
			ResultSet rs1 = stmt.executeQuery("select * from issuebook where rno="+ rno1+ "");
			while(rs1.next())
			{
				int bookid1 = rs1.getInt(1);
				int roll1 = rs1.getInt(2);
				String name1 = rs1.getString(3);
				long mob1 = rs1.getLong(4);
				String date1 = rs1.getString(5).toString();
				String status1 = rs1.getString(6);
				
				out.println("<tr><td>"+bookid1+"</td><td>"+roll1+"</td><td>"+name1+"</td><td>"+mob1+"</td><td>"+date1+"</td><td>"+status1+"</td></tr>");
			
			}
			
		} catch (Exception e) {
		}
		;
		out.println("</table>");

		out.println("</div>");

		request.getRequestDispatcher("footer.html").include(request, response);
		out.close();
	}
}