package com.profound.library;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class LibrarianDao {

	public void insertLibrarian(int empid, String name, String pwd, String email, String mob) {
		try{
			Connection con=DB.getCon();
			PreparedStatement ps=con.prepareStatement("insert into Librarian values(?,?,?,?,?)");
			ps.setInt(1,empid);
			ps.setString(2,name);
			ps.setString(3,pwd);
			ps.setString(4,email);
			ps.setString(5,mob);
			ps.executeUpdate();
			System.out.println("Data inserted....");
			
			
			con.close();
			
		}catch(Exception e){System.out.println(e);}
		
	}
	
	public static boolean authenticate(String email,String password){
		boolean status=false;
		try{
			Connection con=DB.getCon();
			PreparedStatement ps=con.prepareStatement("select * from Librarian where Name=? and pwd=?");
			ps.setString(1,email);
			ps.setString(2,password);
			ResultSet rs=ps.executeQuery();
			if(rs.next()){
				status=true;
			}
			con.close();
			
		}catch(Exception e){System.out.println(e);}
		System.out.print(status);
		return status;
	}
	
	
}
