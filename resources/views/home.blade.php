@extends('layout.appLayout')

@section('content')
    <app-user-home-page>
        @auth
        @endauth
    </app-user-home-page>
@endsection
