@extends('layout.appLayout')

@section('content')
    <app-user-home-page
        csrf="{{csrf_token()}}"
        :user="{{json_encode($u)}}"
        :user_detail="{{json_encode($userDetail)}}">

    </app-user-home-page>
@endsection
