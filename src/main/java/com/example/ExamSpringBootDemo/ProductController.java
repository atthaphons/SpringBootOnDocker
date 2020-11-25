package com.example.ExamSpringBootDemo;


import com.example.ExamSpringBootDemo.utils.ApiResponse;
import lombok.extern.slf4j.Slf4j;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;



@RestController
@RequestMapping("/v1/products")
@Slf4j
public class ProductController {


	@GetMapping("/{id}")
	public ResponseEntity<Product> findProductById(@PathVariable Long id) {
		
		// TODO get product by id from DB
		Product reteProduct = new Product(0, "0", "0");

		if(id == 1){
			reteProduct = new Product(1, "Jackfruit", "Fruit");
		}
		if(id == 2){
			reteProduct = new Product(2, "Angle", "LongTime");
		}

		return ResponseEntity.ok().body(reteProduct);
	}


	@GetMapping("/lombok/{id}")
	public ApiResponse<List> getRoleInfo(@PathVariable Long id) throws ParseException {

		ApiResponse<List> response = new ApiResponse<>();
		List<ProductModel> reps = new ArrayList<>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		ProductModel modelP = new ProductModel();

		System.out.println("id : " + id);
		if(id == 1){
			modelP.setId(1);
			modelP.setName("Akarapob Chaiyoung");
			modelP.setOsVersion("Windows 10 Enterprise");
			modelP.setAntiVirus("McAfee Endpoint Security");
			String strDate = "2019-01-01";
			modelP.setLastUpdate(new Date(sdf.parse(strDate).getTime()));
			modelP.setIpAddress("172.17.178.75");
			reps.add(modelP);

		}
		if(id == 2){
			modelP.setId(2);
			modelP.setName("Chairat Samphaothong");
			modelP.setOsVersion("Windows 10 Enterprise");
			modelP.setAntiVirus("Bitdefender Endpoint Security Tools");
			String strDate = "2018-01-01";
			modelP.setLastUpdate(new Date(sdf.parse(strDate).getTime()));
			modelP.setIpAddress("172.17.178.187");
			reps.add(modelP);
		}
		if(id == 3){
			modelP.setId(3);
			modelP.setName("Ekkarit Tantishootam");
			modelP.setOsVersion("Windows 10 Enterprise");
			modelP.setAntiVirus("Windows Defender Security Center");
			modelP.setIpAddress("172.17.179.37");
			String strDate = "2020-01-01";
			modelP.setLastUpdate(new Date(sdf.parse(strDate).getTime()));
			reps.add(modelP);
		}


		response.setData(reps);

		return response;
	}



//	@GetMapping("/lombok/{id}")
//	public ResponseEntity<ProductModel> findProductByIdLombok(@PathVariable Long id) throws ParseException {
//		ProductModel modelP = new ProductModel();
//
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//
//
//		if(id == 1){
//			modelP.setId(1);
//			modelP.setName("Akarapob Chaiyoung");
//			modelP.setOsVersion("Windows 10 Enterprise");
//			modelP.setAntiVirus("McAfee Endpoint Security");
//			String strDate = "2019-01-01";
//			modelP.setLastUpdate(new Date(sdf.parse(strDate).getTime()));
//			modelP.setIpAddress("172.17.178.75");
//		}
//		if(id == 2){
//			modelP.setId(2);
//			modelP.setName("Chairat Samphaothong");
//			modelP.setOsVersion("Windows 10 Enterprise");
//			modelP.setAntiVirus("Bitdefender Endpoint Security Tools");
//			String strDate = "2018-01-01";
//			modelP.setLastUpdate(new Date(sdf.parse(strDate).getTime()));
//			modelP.setIpAddress("172.17.178.187");
//		}
//		if(id == 3){
//			modelP.setId(3);
//			modelP.setName("Ekkarit Tantishootam");
//			modelP.setOsVersion("Windows 10 Enterprise");
//			modelP.setAntiVirus("Windows Defender Security Center");
//			modelP.setIpAddress("172.17.179.37");
//			String strDate = "2020-01-01";
//			modelP.setLastUpdate(new Date(sdf.parse(strDate).getTime()));
//		}
//		return ResponseEntity.ok().body(modelP);
//	}
	
	@PostMapping
	public ResponseEntity<ProductResponse> saveProduct(@RequestBody Product product) {
		
		// TODO save product to DB
		
		return ResponseEntity.ok().body(new ProductResponse("00", "Success"));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<ProductResponse> updateProduct(@PathVariable Long id, @RequestBody Product product) {
		
		// TODO update product to DB
		
		return ResponseEntity.ok().body(new ProductResponse("00", "Success"));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ProductResponse> deleteProduct(@PathVariable Long id) {
		
		// TODO delete product by id from DB
		
		return ResponseEntity.ok().body(new ProductResponse("00", "Success")); 
	}

}
