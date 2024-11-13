package com.profound.library;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/AddLibrarian")
public class AddLibrarian extends HttpServlet{
	
	public AddLibrarian() {
        super();
        // TODO Auto-generated constructor stub
    }
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException 
	{
		int empid = Integer.parseInt(req.getParameter("empid"));
		String name = req.getParameter("name");
		String pwd = req.getParameter("pwd");
		String email= req.getParameter("email");
		String mob =req.getParameter("mob");
//		int mob = Integer.parseInt(mobile);
//		System.out.println(mob);
		
		LibrarianDao ld = new LibrarianDao();
		ld.insertLibrarian(empid,name,pwd,email,mob);
		req.getRequestDispatcher("index.html").include(req, resp);
	}

}
