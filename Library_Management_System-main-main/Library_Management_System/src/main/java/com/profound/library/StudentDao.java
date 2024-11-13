package com.profound.library;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class StudentDao {

	public void insertStudent(int roll,String name,String branch,String year,String address,String pwd,String email,String phone,String uname){
		try{
			Connection con=DB.getCon();
			PreparedStatement ps=con.prepareStatement("insert into studentlogin values(?,?,?,?,?,?,?,?,?)");
			ps.setInt(1,roll);
			ps.setString(2,name);
			ps.setString(3,branch);
			ps.setString(4,year);
			ps.setString(5,address);
			ps.setString(6,pwd);
			ps.setString(7,email);
			ps.setString(8,phone);
			ps.setString(9,uname);
			ps.executeUpdate();
			System.out.println("Data inserted....");
			
			
			con.close();
			
		}catch(Exception e){System.out.println(e);}
		
	}
	
	public static boolean authenticate(String uname, String password) {
		boolean status = false;
		try {
			Connection con = DB.getCon();
			PreparedStatement ps = con.prepareStatement("select * from studentlogin where username=? and pwd=?");
			ps.setString(1, uname);
			ps.setString(2, password);
			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				status = true;
			}
			con.close();

		} catch (Exception e) {
			System.out.println(e);
		}
		return status;
	}
}
