package com.leticia.carteirafacilspring.model;

import java.util.Collection;

// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.userdetails.UserDetails;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Usuario {

    private Long id;
    private String email;
    private String senha;

    // @Override
    // public Collection<? extends GrantedAuthority> getAuthorities() {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'getAuthorities'");
    // }
    // @Override
    // public String getPassword() {
    //     return senha;
    // }
    // @Override
    // public String getUsername() {
    //     return email;
    // }
    // @Override
    // public boolean isAccountNonExpired() {
    //     return true;
    // }
    // @Override
    // public boolean isAccountNonLocked() {
    //     return true;
    // }
    // @Override
    // public boolean isCredentialsNonExpired() {
    //     return true;
    // }
    // @Override
    // public boolean isEnabled() {
    //     return true;
    // }
    
}
