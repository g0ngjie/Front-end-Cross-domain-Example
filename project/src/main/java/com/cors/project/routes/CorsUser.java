package com.cors.project.routes;

import com.cors.project.dto.PageDto;
import com.cors.project.dto.ResultDto;
import com.cors.project.mock.UserMock;
import com.cors.project.vo.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cors/user")
public class CorsUser {

    private UserMock userMock;

    public CorsUser(UserMock userMock) {
        this.userMock = userMock;
    }

    @GetMapping("{id}")
    public User userInfo(@PathVariable("id") int userId) {
        return userMock.userInfo();
    }

    @PostMapping()
    public List<User> userInfo(@RequestBody PageDto params) {
        return userMock.userList();
    }

    @DeleteMapping("{id}")
    public ResultDto userDel(@PathVariable("id") int userId) {
        ResultDto res = new ResultDto();
        res.setCode("000000");
        res.setMsg("删除成功");
        return res;
    }
}
