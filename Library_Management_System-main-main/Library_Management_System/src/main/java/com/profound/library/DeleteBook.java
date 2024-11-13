package com.profound.library;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/DeleteBook")
public class DeleteBook extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException 
	{
		String bookId = req.getParameter("callno").toString();
		int status = BookDao.delete(bookId);
		if(status>0)
		{
			System.out.println("delete success");
		}
		else
		{
			System.out.println("delete failed");
		}
		req.getRequestDispatcher("ViewBooks").forward(req, resp);
	}

}
